---
title: Hue Shifting
subtitle: Making natural tones in lights and shadows
author: pixienop
layout: guide
---

::app-ponymote{mote="twibeam"}
Hi there! This is the first guide I've written here, so I hope you enjoy it! If you have any questions, comments, or other suggestions, please let me know so I can update this page.
::

---

Have you ever looked at a piece of art and thought "Dang, the lights and shadows look so **luscious** and **rich**. How did they do that?"

Well if you have, the answer probably includes _hue shifting_. This is a technique where in lit areas the hues are shifted towards the colour of the light, and in shadows hues are shifted away from the light.

::app-note
This guide is going to include a lot of general colour theory and information. If you already know this, what HSV means, and cool/warm colours, then you can skip the intro and get straight into the hue-shifting sections.
::

## Hue, Saturation, Value

Since we're talking about 'hue shifting', I should explain what 'hue' means – as well as some of the other terms and words I'll be using.

### Colour

To me, this is a combo of a hue, saturation, and value. But when artist talk about colours, we also can just mean the hue. It's a bit confusing. For example, I'd say that :app-hsv{:h="0" v="50%"} and :app-hsv{:h="0" v="30%"} are different 'colours', even though they're just different brightnesses…

### Hue

The 'colour' part of a colour. All of these are the same saturation / value, but **different hues**:

:app-hsv{:h="0"} :app-hsv{:h="45"} :app-hsv{:h="100"} :app-hsv{:h="190"} :app-hsv{:h="240"} :app-hsv{:h="290"} :app-hsv{:h="335"}

### Saturation

How intense the colour is. All of these are the same hue / value, but **different saturations**:

:app-hsv{:h="335" s="0%"} :app-hsv{:h="335" s="10%"} :app-hsv{:h="335" s="20%"} :app-hsv{:h="335" s="30%"} :app-hsv{:h="335" s="40%"} :app-hsv{:h="335" s="50%"} :app-hsv{:h="335" s="60%"} :app-hsv{:h="335" s="70%"} :app-hsv{:h="335" s="80%"} :app-hsv{:h="335" s="90%"} :app-hsv{:h="335" s="100%"}

### Value

How light or dark a colour is. All of these are the same hue / saturation, but **different values**:

:app-hsv{:h="335" v="0%"} :app-hsv{:h="335" v="10%"} :app-hsv{:h="335" v="20%"} :app-hsv{:h="335" v="30%"} :app-hsv{:h="335" v="40%"} :app-hsv{:h="335" v="50%"} :app-hsv{:h="335" v="60%"} :app-hsv{:h="335" v="70%"} :app-hsv{:h="335" v="80%"} :app-hsv{:h="335" v="90%"} :app-hsv{:h="335" v="100%"}

::app-ponymote{mote="ajcower"}
The less-saturated colours look so dull and ugly, even I can't stand it!
::
::app-ponymote{mote="rarityjudge"}
Everything has its place, darling – just wait a little while.
::

## The Colour Wheel

Here's the colour wheel:

:app-colour-wheel

There are a lot of colour wheel variants, but this is the one we'll be using in this guide.

As we move around the wheel, the hue changes. And as we move towards the centre the **value** gets higher (things get lighter).

### Warm and Cool Colours

The main way to split up colours on the wheel are into two sections, **warm** and **cool**. Imagine a line going through the wheel from pinkish-red, through the middle, and to blueish-green. The side with red and yellow in it is the 'warm' side, and the side with blue and purple is the 'cool' side.

#### Warm

:app-hsv{:h="-30"} :app-hsv{:h="-12"} :app-hsv{:h="6"} :app-hsv{:h="24"} :app-hsv{:h="42"} :app-hsv{:h="60"} :app-hsv{:h="78"} :app-hsv{:h="96"} :app-hsv{:h="114"} :app-hsv{:h="132"}

These are supposed to feel warm and bright! Like fire, or going on an exciting adventure!

#### Cool

:app-hsv{:h="150"} :app-hsv{:h="168"} :app-hsv{:h="186"} :app-hsv{:h="204"} :app-hsv{:h="222"} :app-hsv{:h="240"} :app-hsv{:h="258"} :app-hsv{:h="276"} :app-hsv{:h="294"} :app-hsv{:h="312"}

These are supposed to feel cool and damp, like you're sitting under the stars.

#### But!

How cool or warm a colour is depends on context! Where it is in the picture, the colours around it, and even more. In particular, cool colours are usually less-saturated than warm colours when you use them. In traditional painting kits you normally get a set of warm and cool colours to play with, with the each one's hue leaning towards the warmer or cooler side of the wheel.

Cool and Warm Reds: :app-hsv{:h="-30" s="85%"} :app-hsv{:h="0"}

Cool and Warm Yellows: :app-hsv{:h="63" s="90%"} :app-hsv{:h="53"}

Cool and Warm Blues: :app-hsv{:h="233" s="90%"} :app-hsv{:h="253"}

::app-ponymote{mote="ajbaffle"}
Wait, why do we need to know this?
::
::app-ponymote{mote="raritydress"}
Well this affects how lights and shadows work, darling! Lit areas are _usually_ warm and shadows are _usually_ cool. We use hue shifting to show these differences more naturally on the objects in our scene.
::

## Hue Shifting

Finally! At the most basic level, hue shifting can be summed up as:

- In lit areas, the hue shifts towards the hue of the light source.
- In shaded areas, the hue shifts away from the hue of the light source.

Let's dive into this a bit more.

### Example Spheres

Take a look at these two spheres:

:app-guide-image{src="/guide-resources/pixienop-hueshifting-1.jpg" artist="pixienop"}

---

The top sphere's shaded areas get a darker value and the lit areas just get a lighter value. Nothing too complex, just moving towards black and towards white:

:app-hsv{:h="57" v="43%"} :app-hsv{:h="57"} :app-hsv{:h="57" v="80%"}

---

The bottom sphere's shaded areas tint towards red, and the lit areas tint towards green. This makes it look like the sphere's being lit by a light, cool-ish light source:

:app-hsv{:h="46" v="47%"} :app-hsv{:h="57"} :app-hsv{:h="63" v="73%"}

---

Because we're shifting the hue, we _also_ don't need to change the value as much to get the same visual effect.

### Colour Examples

In this section we'll have a few lights and example objects. The hue shifts here might be a bit exaggerated, so feel free to shift more or less in your own pictures. We'll also include a small colour wheel alongside each section for reference.

#### Yellow Light

:app-colour-wheel{small}

This is the colour of our light source: :app-hsv{:h="60" big}

So the shadows for this light source would be: :app-hsv{:h="240" big}

---

Let's say we have a red object: :app-hsv{:h="0"}

This could be a wall, a sphere, a cube, or a pony's coat! If we look at our colour wheel, the lit areas will tint towards orange and the shadow areas will tint towards purple.

Compare:

Shadow :app-hsv{:h="-32" v="30%"} :app-hsv{:h="-26" v="39%"} :app-hsv{:h="-16" v="42%"} :app-hsv{:h="0" big} :app-hsv{:h="15" v="55%"} :app-hsv{:h="23" v="60%"} Light – with hue shifting

vs

Shadow :app-hsv{:h="0" v="30%"} :app-hsv{:h="0" v="39%"} :app-hsv{:h="0" v="42%"} :app-hsv{:h="0" big} :app-hsv{:h="0" v="60%"} :app-hsv{:h="0" v="70%"} Light – no hue shifting

The effect is subtle, but noticable when applied across your scene. Your shadows and lit areas end up looking **much** more dynamic, interesting, and natural. It also helps it feel like your light source is actually interacting with your scene.

---

Let's say we have an aqua object: :app-hsv{:h="170"}

If we look at our colour wheel, the lit areas will tint towards yellow/green and the shadow areas will tint towards blue.

Shadow :app-hsv{:h="198" v="45%"} :app-hsv{:h="186" v="46%"} :app-hsv{:h="180" v="47%"} :app-hsv{:h="170" big} :app-hsv{:h="150" v="70%"} :app-hsv{:h="130" v="80%"} Light – with hue shifting

vs

Shadow :app-hsv{:h="170" v="33%"} :app-hsv{:h="170" v="40%"} :app-hsv{:h="170" v="45%"} :app-hsv{:h="170" big} :app-hsv{:h="170" v="70%"} :app-hsv{:h="170" v="80%"} Light – no hue shifting

---

Here's an example scene painted up with this light source and some very subtle hue shifting:

:app-guide-image{src="/guide-resources/pixienop-hueshift-1.jpg" artist="pixienop"}

<br>

#### Blue Light

:app-colour-wheel{small}

This is the colour of our light source: :app-hsv{:h="200" big}

So the shadows for this light source would be: :app-hsv{:h="20" big}

---

Let's say we have a pink object: :app-hsv{:h="-30"}

If we look at our colour wheel, the lit areas will tint towards purple and the shadow areas will tint towards red/orange.

Shadow :app-hsv{:h="10" v="39%"} :app-hsv{:h="0" v="42%"} :app-hsv{:h="-15" v="45%"} :app-hsv{:h="-30" big} :app-hsv{:h="-45" v="60%"} :app-hsv{:h="-60" v="73%"} Light – with hue shifting

vs

Shadow :app-hsv{:h="-30" v="39%"} :app-hsv{:h="-30" v="42%"} :app-hsv{:h="-30" v="45%"} :app-hsv{:h="-30" big} :app-hsv{:h="-30" v="60%"} :app-hsv{:h="-30" v="73%"} Light – no hue shifting

---

Let's say we have a green object: :app-hsv{:h="100"}

If we look at our colour wheel, the lit areas will tint towards aqua/blue and the shadow areas will tint towards yellow.

Shadow :app-hsv{:h="70" v="32%"} :app-hsv{:h="80" v="40%"} :app-hsv{:h="90" v="44%"} :app-hsv{:h="100" big} :app-hsv{:h="130" v="72%"} :app-hsv{:h="155" v="75%"} Light – with hue shifting

vs

Shadow :app-hsv{:h="100" v="32%"} :app-hsv{:h="100" v="40%"} :app-hsv{:h="100" v="44%"} :app-hsv{:h="100" big} :app-hsv{:h="100" v="72%"} :app-hsv{:h="100" v="85%"} Light – no hue shifting

::app-ponymote{mote="raritydress"}
And that's how you integrate the light source into your scene, darlings.
::
::app-ponymote{mote="ajfrown"}
I think I'll need to see this being used in an actual picture to compare…
::

### More Examples

From [viw's shading guide](/guides/shading), here's some art from Hobbular:
:app-guide-image{src="/guide-resources/hobbular-hue-shifting.png" artist="Hobbular"}

On the left image, you can see the hues being changed in the shaded areas of Fluttershy. On the right image only the value is changed, so it ends up looking washed-out.

::app-ponymote{mote="ajsup"}
Hot dang, Fluttershy. Nice hue shifting!
::
::app-ponymote{mote="raritydaww"}
I agree, darling. Wonderful work.
::
::app-ponymote{mote="fluttershh"}
Th-thank you girls…
::

### Videos

<YouTube videoId="RL_5va7jEx8"/>

<YouTube videoId="gwLQ0cDb4cE"/>

<YouTube videoId="6hmWUfH_wOo"/>

## In Conclusion

While you're painting:

- Keep the colour of your light source in mind.
  - If you have multiple light sources, try to figure out how the effective colours change – and in which parts of the scene they'd merge and where they'd stay separate.
- Use that to determine the hue/tone your shadows would take on.
- Shift the hues in the lit areas _towards_ the hue of your light sources.
- Shift the hues in the shaded areas _away from_ the hue of your light sources.

And that's about all you need to do! Go out there and use some effective colours!

::app-ponymote{mote="ajhappy"}
Wow, that was a mighty helpful lesson. Ah learned a lot!
::
::app-ponymote{mote="rarityjudge"}
'Ah'? Dear, you don't need to _write_ in your accent, I'm sure they'll be able to get it themselves.
::
