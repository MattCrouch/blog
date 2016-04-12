---
layout: post
title: Making a guitar for the Kinect SDK
date: 2012-01-26 16:32:19
image: 2012-01-26-making-a-guitar-for-the-kinect-sdk/guitar-mechanism-overview-1.png
tags:
- C#
- guitar
- instrument
- Kinect
- moto
- SDK
- WPF
---
[Moto][Moto] is my graduate project on my university course. It involves playing air instruments on the Kinect by mapping them to your body. But of course no band would be complete without at least one guitarist, so that’s what I’ll show you now.

## How it functions

[![Guitar Hero Controllers][Guitar Hero Controllers]][Guitar Hero Controllers]

Now, the way a guitar works in Moto is much like how they work in other music games like *Guitar Hero* – You’ve got five zones which, when hit, produce a different sound. It’s like a dumbed down version of a real guitar. Trying to emulate a guitar would be ridiculous of course as, well, you might as well just play a guitar.

In principle the further away your hand is from where you strum the lower the note. So, in Moto, five zones will be set up exactly for that. But the problem is this – How do you know where their hand is without any physical buttons to push? The answer? Pythagoras.

## Pythagoras 101

a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

You remember that from school, right? The length of the hypotenuse squared is equal to the square of the other two sides. Triangles and that.

Here’s me demonstrating what I mean. Hello.

[![Guitar Mechanism Overview 1][Guitar Mechanism Overview 1]][Guitar Mechanism Overview 1]

Just to confuse you, I’m using x, y and z. It still means the same thing. x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup>

So, for arguments sake, say x is 40cm long and y is 30cm long.  30<sup>2</sup> x 40<sup>2</sup> = 900 x 1600 = 2500. The square root of 2500 is 50. So z is 50cm. Simples.

Taking that with more of a view of the Kinect SDK, say I’m strumming at a point where x = 0 and y = 0 – the co-ordinate (0,0) – and my other hand is at the point (-30, -40). The same thing still applies. –30<sup>2</sup> x –40<sup>2</sup> = 50<sup>2</sup>. When you square a negative number, it becomes positive. The length is still 50cm, regardless of direction.

[![Guitar Mechanism Overview 2][Guitar Mechanism Overview 2]][Guitar Mechanism Overview 2]
[![Guitar Mechanism Overview 3][Guitar Mechanism Overview 3]][Guitar Mechanism Overview 3]

This rule still works whether I’m close or far away from the point where I strum. Z – the line – gets shorter and longer. It’s from that I can work out exactly where my other hand is in relation to the strumming hand.

However, what happens if the player rocks out too hard? They’re not always going to be facing the Kinect head on and might have their hand further away from the Kinect than the strumming hand. Depending how far they turn round, the x value for the other hand is going to get closer and closer to the strumming hand, which will make the z length shorter. Solution? 3D Space.

Yeah. I know. It gets confusing. This diagram doesn’t really help much either, but hear me out.

[![Guitar Mechanism Overview 4][Guitar Mechanism Overview 4]][Guitar Mechanism Overview 4]

True, more working out is needed, but instead we’re going to get a better handle on how far the two are apart. All we need to do, though, is do Pythagoras twice. Once to get the length of x in a bigger triangle, which then gives us the z we are looking for.

Consider the picture example above. Our strumming hand is closer to the Kinect than our other hand. So we’ve drawn a cuboid around to connect these points. The first triangle we’re going to look at uses x<sub>1</sub> and y<sub>1 </sub>to get z<sub>1</sub>. x<sub>1 </sub>is the difference in x between the strumming hand and the other hand, and y<sub>1</sub> is the difference in depth between the strumming hand and the other hand. This gives us z<sub>1</sub> – the base of our bigger triangle.

When we’ve worked out z<sub>1</sub>, this gives us the base of our second triangle, which we’ve labeled x<sub>2</sub>. y<sub>2</sub> is the difference in height from the strumming hand and the other hand. Doing Pythagoras’ theorem on this gives us z<sub>2</sub> – the length we want.

I know it’s not straight forward, but it could be a *whole lot* worse. But let’s work out an example. The strumming hand is at (0, 0, 1) and the other hand is at (40, 60, 1.5).

(0 – 40)<sup>2</sup> + (1 – 1.5)<sup>2</sup> = –40<sup>2</sup> + –2.5<sup>2</sup> = sqrt(1600 + 6.25) = sqrt(1606.25) ≈ 40.08

So 40.08cm is the length of z<sub>1</sub>, so that’s also what x<sub>2 </sub>is.

40.08<sup>2</sup> + (0 – 60)<sup>2</sup> = 40.08<sup>2</sup> + –60<sup>2</sup> = 1606.25 + 3600 = sqrt(4906.25) ≈ 70.04

So z<sup>2 </sup>– the distance between both our hands - is 70.04cm or there about. Phew.

It seems a whole lot of effort to get that tiny bit of information, but from there we can work out what note to actually play.

## C-sharpen up

Within *Moto* I’ve already got a few functions predefined so I can use them for many things like hand tracking. We’re just going to set one up to work out Pythagoras so, if we need it again, we can use it.

{% highlight csharp %}
private double doPythag(double a, double b)
{
	double c = Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2));
	returnc;
}
{% endhighlight %}

So now doing two lots of Pythagoras isn’t really a problem. You give it a and b (without squaring them first) and it’ll pump out the square root of c<sup>2</sup> – c. Sweet.

The rest of the guitar essentially borrows code from the drums side of things – it defines an area that it waits for either hand to enter and, when it does, play a sound. But we’ve only got one box, the strumming area called <code>strumArea</code> which, you guessed it, is where we strum with our right hand by default.

{% highlight csharp %}
double[] strumAreaStart = new double[3];
double[] strumAreaEnd = new double[3];
bool insideStrumArea = false;

internal void defineStrumArea() {
	double strumSize = 0.4; //Size of strum area edges (in metres) 

	strumAreaStart = new double[] { Convert.ToDouble(skeleton.Joints[JointType.HipCenter].Position.X) - (strumSize / 2), Convert.ToDouble(skeleton.Joints[JointType.HipCenter].Position.Y) - (strumSize / 2),Convert.ToDouble(skeleton.Joints[JointType.HipCenter].Position.Z) - strumSize };

	strumAreaEnd = new double[] { strumAreaStart[0] + (strumSize / 2), strumAreaStart[1] +(strumSize / 2), strumAreaStart[2] + strumSize };

	SetStrumPosition(strum1);
}
{% endhighlight %}

We’re setting up our strum area at the moment. This function needs to run on every new frame as it’s based on the player’s hip position and so needs to constantly know where it should be checking. It’s just defining numbers which the X, Y and Z values of the hand will need to fall into. <code>setStrumPosition()</code> is positioning a graphic on screen. It’s not all that important really.

Next comes the number crunching – the stuff we work out at the start, but now in glorious code! We’re separating that into its own little function for the sake of clean looking code.

{% highlight csharp %}
internal double checkNeckDist(Joint hand)
{
	Joint hip = skeleton.Joints[JointType.HipCenter];
	double xLength = doPythag((hip.Position.Z - hand.Position.Z), (hip.Position.X - hand.Position.X));

	double neckDist = doPythag(xLength, (hip.Position.Y - hand.Position.Y));

	return neckDist;
}
{% endhighlight %}

All this is doing is doing what we worked out earlier. If you need a refresher, hit it up above. :)

Lastly, tieing it all together, is another function we are running on every frame. This is checking whether the supplied Joint lies between the X, Y and Z values that we’ve outlined earlier.

{% highlight csharp %}
internal void checkStrum(Joint joint)
{
	//Did the player strum just then?

	double posX = joint.Position.X;
	double posY = joint.Position.Y;
	double posZ = joint.Position.Z;

	if (strumAreaStart[0] < posX && strumAreaEnd[0] > posX && strumAreaStart[1] < posY &&strumAreaEnd[1] > posY && strumAreaStart[2] < posZ && strumAreaEnd[2] > posZ)
		{
			if (!insideStrumArea)
			{
				if (instrumentInUse == 1)
				{
					//Normal guitar stance
					strumGuitar(checkNeckDist(skeleton.Joints[JointType.HandLeft]));
				}
				else if (instrumentInUse == 2)
				{
					//Lefty stance
					strumGuitar(checkNeckDist(skeleton.Joints[JointType.HandRight]));
				}
				insideStrumArea = true;
			}
		}
		else
		{
			insideStrumArea = false;
		}
}
{% endhighlight %}

<code>instrumentsInUse</code> is a variable within *Moto* which, funnily enough, tells the program which instrument the player is currently playing. 1 is Guitar and 2 is Lefty Guitar, where the player strums with their left hand instead. We are passing <code>strumGuitar</code> the value we’re generating in terms of distance from the hip to the hand. The bigger the number, the lower the sound should be. That’s all <code>strumGuitar</code> is doing.

That’s it really. Not *all* that complex. That’s how it works! :)

[Guitar Hero Controllers]:{{ site.baseurl }}/assets/2012-01-26-making-a-guitar-for-the-kinect-sdk/guitar-hero-controllers.jpg
[Guitar Mechanism Overview 1]:{{ site.baseurl }}/assets/2012-01-26-making-a-guitar-for-the-kinect-sdk/guitar-mechanism-overview-1.png
[Guitar Mechanism Overview 2]:{{ site.baseurl }}/assets/2012-01-26-making-a-guitar-for-the-kinect-sdk/guitar-mechanism-overview-2.png
[Guitar Mechanism Overview 3]:{{ site.baseurl }}/assets/2012-01-26-making-a-guitar-for-the-kinect-sdk/guitar-mechanism-overview-3.png
[Guitar Mechanism Overview 4]:{{ site.baseurl }}/assets/2012-01-26-making-a-guitar-for-the-kinect-sdk/guitar-mechanism-overview-4.png

[Moto]:http://www.mattcrouch.net/moto