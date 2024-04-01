# Festival app

## Rough requirements!


## **Pages**
- [ X ] *splash screen* 
- [ X ] *attraction list* 
    - [ X ] at least 6 pages
- [ X ]  *infos & details* 
    - [ X ] from artist and event
- [  ] *favourites list*

*On ***attraction list*** page we need some information, those are:*
- [ X ] artist/group name
- [ X ] image
- [ X ] location

The list **should be ordered by date and time of the presentation**.

On *infos & details* we need a "lot" of information, those are:
- [ X ] artist/group name
- [ X ] address
- [ X ] time of the show
- [ X ] map of the address
- [ X ] one or more image or artist photo
- [ X ] a video or spotify playlist
- [ X ] artist website or social media 
- [ X ] ticket price or free indication
- [ X ] website URL or app for the tickets, if apply
- [ X ] cellphone or WhatApp for reservations, if apply

### This *infos & details* screen should me modular, **not one for each event**.

## **Storage**

### It can have data stored locally or **in the cloud** in JSON or XML.

### ***Do's***
- Be modular
- Plan ahead
- Allow for data update 
- Less internet acesses, more battery and less data plan used

### ***Dont's***
- Hardcode information on source code


## ***Other things***

- Get inspirations and informations on the internet or social media

- Mobile phone, website and social medias should be clickable to open on corresponding apps

- Show be able to see the location on Google Maps, so user can plan a route

- Videos can be embedded or displayed on another websites.

- User can **favourite** attractions of his interest, those should be ***locally*** stored so the user can access them later. [Example code!](https://snack.expo.dev/@frank-siqueira/async-storage-example)