---
sidebar_position: 4
sidebare_label: How to Filter the AutoAO3 App
---

# How to Filter the AutoAO3 App

The **AutoAO3 App** was made by a fandom coder who wanted a more visually pleasing way to look at requests during exchanges. It has a few benefits over the traditional google sheets used by lots of exchanges, including the ability to bookmark prompts you're interested in, and the ability to filter prompts, even if you don't own the sheet. The tips below show you how to use this powerful tool.

## Prepping to filter/search.

The app works by scraping the data already available on AO3. That's a fancy way of saying that it uses code to pull the exchange's info from AO3, get what it wants, and spit back out again in a visually pleasing format. There are a couple of things you can and **should** do to make your filtering more pleasant.

1. Start by rescraping the data. (*Optional.*)
    The mods are pretty dilligent about rescraping sign-ups (getting the new info) a couple of times a day, but if you want to rescrape to ensure you have the most up to date versions, you are more than welcome to do so. It won't hurt anything!

    The app displays the last time the info was scraped in your local time to the right of the exchange info. To re-scrape, simply hit the red `Re-scrape` button on the far right side of the window and wait for 5-15 minutes for it to get all the new data. Then, refresh your page.

<a href="#img1" className="preview">
<img src={require('/img/tutorial/scrape.png').default} alt="Re-scrape Button"  className="thumbnail" />
</a>
<p className="label">Re-scrape Button: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img1">
<img src={require('/img/tutorial/scrape.png').default} />
</a>

2. Load all the data.

    The app only loads 50 requests initially. Please note this is NOT 50 users, but 50 individual requests - so if 5 people have 10 requests each that's all 50 request spots it will load.

    To get everything, drag your scrollbar to the bottom of the window until you can't drag it anymore. That's it! You're now ready to filter everything.

<a href="#img2" className="preview">
<img src={require('/img/tutorial/first50.png').default} alt="First 50 Requests"  className="thumbnail" />
</a>
<p className="label">First 50 Requests Only: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img2">
<img src={require('/img/tutorial/first50.png').default} />
</a>

<a href="#img3" className="preview">
<img src={require('/img/tutorial/allrequests.png').default} alt="All Requests"  className="thumbnail" />
</a>
<p className="label">All Requests: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img3">
<img src={require('/img/tutorial/allrequests.png').default} />
</a>

:::tip

You can use the (^) symbol on the bottom right of the screen to jump to the
top if there are a lot of requests!

:::

## Which filters to use.

The most useful tab for finding specific requests (and Treatless!) is the **All** tab, but there are several filters available which simply won't work for our exchange.

<a href="#img4" className="preview">
<img src={require('/img/tutorial/whichfilters.png').default} alt="Which Filters to Use"  className="thumbnail" />
</a>
<p className="label">Which Filters to Use: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img4">
<img src={require('/img/tutorial/whichfilters.png').default} />
</a>

- since we use `Dragon Age - All Media Types` to sign-up filtering by *Fandom* won't help. 
- *Characters* only works if the Sign-Up sheet itself uses the Characters field; since our sign-up sheet uses the Relationships field this will not work for us. 
- we do not allow *Optional Tags* during sign-up.
- we do not use *Archive Warnings* during sign-up.

## Filtering relationships.

If you're looking to create for a specific character or ship or want to see what's been requested for a specific character or ship this is the place to start. Using the *Relationships* field you can search for an entire tag (i.e.
`Alistair/Morrigan/Female Tabris`), or for just an individual character (i.e. `Bull`).

<a href="#img5" className="preview">
<img src={require('/img/tutorial/shipfilter.png').default} alt="Relationship Filter"  className="thumbnail" />
</a>
<p className="label">Relationship Filter: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img5">
<img src={require('/img/tutorial/shipfilter.png').default} />
</a>

It's important to note that by default the filter does NOT look for exact matches. In fact it uses an "and" to search. This means that entering `Bull Hawke` would pull up any tags where both The Iron Bull AND Hawke (Female Hawke, Male Hawke, Carver Hawke, Bethany Hawke, Leandra Hawke, etc) show up. To pull up an <u>exact</u> match for a character who shares first or last names with another character you need to enclose it in quotes (i.e. "Male Hawke").

<a href="#img6" className="preview">
<img src={require('/img/tutorial/exactshipfilter.png').default} alt="Exact Relationship Filter using Quotes" className="thumbnail" />
</a>
<p className="label">Exact Relationship Filter: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img6">
<img src={require('/img/tutorial/exactshipfilter.png').default} />
</a>

**Other search short cuts include:**
- Using `|` (vertical line) for "or". `Tabris | Mahariel` would provide a list of requests where either Tabris or Mahariel (of any gender) shows up in the ship.
- Using `!` (exclamation) for "not". `Aeducan !Female` would provide a list of requests with Male or Nonbinary Aeducans.
- Combining multiple options. `Alistair Morrigan Amell | Cousland !Female` would look for requests with Alistair and Morrigan and either an Amell or Cousland not containing the word Female (so Male or Nonbinary).

## Filtering prompts.

The *Prompts* field is useful as a filter if you're looking to write or draw a specific trope, kink, etc. For example, if you're really in the mood to give someone a BDSM treat you can filter on `BDSM`. This field is more limited than the *Relationships* field as the "or" and "not" designations do not work. However, using quotes for an exact match on a phrase <u>does</u> work. This means you can filter for   `"coffee shop au"` and find only that phrase rather than searching `coffee shop au` and getting results which have `coffee` and `shop` and `au` as separate searches.

<a href="#img7" className="preview">
<img src={require('/img/tutorial/coffeeshopau.png').default} alt="Exact Coffee Shop AU" className="thumbnail" />
</a>
<p className="label">Exact Search Results: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img7">
<img src={require('/img/tutorial/coffeeshopau.png').default} />
</a>

<a href="#img8"  className="preview">
<img src={require('/img/tutorial/promptsearch.png').default} alt="Coffee Shop AU" className="thumbnail" />
</a>
<p className="label">Search without Quotes: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img8">
<img src={require('/img/tutorial/promptsearch.png').default} />
</a>

Notice the filter without quotations returns more results than the filter with quotations.

:::warning

Please be sure to read the prompts that are returned **thoroughly**. This filter can't tell if the person has listed your search as a want or a *DNW*, it can only detect that the words are present in the request.

:::

## Filtering by type (and treatless!).

In order to help with matching, our sign-ups use the *Freeform* field to designate whether fanart or fanfic are being requested. For your assigned recipient, you should look for the `Fanfic` or `Fanart` tags on their prompt which designates their desire for their main gift.

If you're looking to complete treats of a specific type, you can search for participants who want those treats using the below tags:
- `Treats - Fanart` for Fanart treats.
- `Treats - Fanfic` for Fanfic treats.
- `Treats - Other` for alternative fanwork treats.

:::tip

This field is <u>not</u> case sensitive, but it is limited to searching for only one tag at a time.

:::

:::caution

Be sure to use the full tags listed above for searching for treats to give. Entering just `Treats` will return every tag that has the word "treats" in it including `No Treats Please`, and searching for just "fanfic" or "fanart" could return requests which are only looking for those as a <u>Main</u> gift and not a treat.

:::

<a href="#img9">
<img src={require('/img/tutorial/freeformfilter.png').default} alt="Searching For Treats Types"  className="thumbnail" />
</a>
<p className="label">Searching For Treats Types: click to enlarge</p>

<a href="#_" className="lightbox" id="img9">
<img src={require('/img/tutorial/freeformfilter.png').default} />
</a>

In addition, you can tell if someone has received a treat, because the Mods will be adding a `Treat Received` tag on their prompts. That means you can find Treatless participants by searching for `!"Treat Received"` in this field.


<a href="#img10" className="preview">
<img src={require('/img/treatreceived.png').default} alt="Treatless Filtering" className="thumbnail"></img>
</a>
<p className="label">Treatless Filtering: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img10">
<img src={require('/img/treatreceived.png').default}></img>
</a>

You can read more about treats in the [Treats & Treatless FAQ](/docs/exchange/treats).

## Searching for AO3 Users.

On the far right of the screen there is a **User Search** tab which allows you to find a specific user's prompt. You can use this to find an easier to read version of your assigned recipients's requests or look for friends' sign-ups. The search requires the <u>exact</u> username with punctuation, capital letters, etc, in order to work.

Simply enter the username in the search and hit go.

<a href="#img11"  className="preview">
<img src={require('/img/tutorial/usersearch.png').default} alt="User Search"  className="thumbnail" />
</a>
<p className="label">User Search: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img11">
<img src={require('/img/tutorial/usersearch.png').default} />
</a>

This will pull every request from the user and display them below.

<a href="#img12" className="preview">
<img src={require('/img/tutorial/usersearch1.png').default} alt="User Results"  className="thumbnail" />
</a>
<p className="label">User Results: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img12">
<img src={require('/img/tutorial/usersearch1.png').default} />
</a>

## Filtering the tagset.

AutoAo3 also loads the entire tagset for viewing into the app. You can see the entire list or filter by character on the **Tagset** tab to the right of the **All** tab. To view the tags included in our tagset, click on `All Fandoms in All Catgories` → `Dragon Age - All Media Types`. This brings up the entire nominated tag list. You can then use the *Filter Characters* field to look for ships which have a specific character or scroll through to view the whole list.

<a href="#img13" className="preview">
<img src={require('/img/tutorial/tagsetfilter.png').default} alt="Tagset Filter" className="thumbnail" />
</a>
<p className="label">Tagset Filter: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img13">
<img src={require('/img/tutorial/tagsetfilter.png').default} />
</a>

<p role="note">The Nominations Spreadsheet remains up throughout and after the exchange, so you can always check it for tags as well.</p>

## Bookmarking requests.

You can use the app to bookmark fandoms (not very useful for this exchange) or specific requests you're interested in fulfilling. The bookmarks are stored <u>per browser</u>. There are instructions for how to move your bookmarks across browsers if you need/want to under *Show Backup Instructions*. To bookmark something, simply click the heart next to the name.

<a href="#img14" className="preview">
<img src={require('/img/tutorial/bookmarking.png').default} alt="Click the Heart to Bookmark" className="thumbnail" />
</a>
<p className="label">Click the Heart to Bookmark: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img14">
<img src={require('/img/tutorial/bookmarking.png').default} />
</a>

Anything you bookmark is moved to the **Bookmarks** tab for you. To remove, simply click the heart again.

<a href="#img15" className="preview">
<img src={require('/img/tutorial/bookmarkstab.png').default} alt="Bookmarks Tab" className="thumbnail" />
</a>
<p className="label">Bookmarks Tab: click to enlarge</p>
<p> </p>
<a href="#_" className="lightbox" id="img15">
<img src={require('/img/tutorial/bookmarkstab.png').default} />
</a>

<p role="note">The bookmarks feature is only available after sign-ups close!</p>

