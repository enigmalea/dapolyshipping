---
sidebar_position: 4
sidebare_label: How to Filter the AutoAO3 App
---

# How to Filter the AutoAO3 App

The **AutoAO3 App** was made by a fandom coder who wanted a more visually
pleasing way to look at requests during exchanges. It has a few benefits over
the traditional google sheets used by lots of exchanges, including the ability
to bookmark prompts you're interested in, and the ability to filter prompts,
even if you don't own the sheet. The tips below show you how to use this
powerful tool.

## Prepping to filter/search.

The app works by scraping the data already available on AO3. That's a fancy way
of saying that it uses code to pull the exchange's info from AO3, get what it
wants, and spit back out again in a visually pleasing format. There are a couple
of things you can and **should** do to make your filtering more pleasant.

1. Start by rescraping the data. (_Optional._) The mods are pretty dilligent
   about rescraping sign-ups (getting the new info) a couple of times a day, but
   if you want to rescrape to ensure you have the most up to date versions, you
   are more than welcome to do so. It won't hurt anything!

   The app displays the last time the info was scraped in your local time to the
   right of the exchange info. To re-scrape, simply hit the red `Re-scrape`
   button on the far right side of the window and wait for 5-15 minutes for it
   to get all the new data. Then, refresh your page.

<img src="/img/tutorial/scrape.png" alt="Re-scrape Button"  className="thumbnail" />

2. Load all the data.

   The app only loads 50 requests initially. Please note this is NOT 50 users,
   but 50 individual requests - so if 5 people have 10 requests each that's all
   50 request spots it will load.

   To get everything, drag your scrollbar to the bottom of the window until you
   can't drag it anymore. That's it! You're now ready to filter everything.

<img src="/img/tutorial/first50.png" alt="First 50 Requests"  className="thumbnail" />

<img src="/img/tutorial/allrequests.png" alt="All Requests"  className="thumbnail" />

:::tip

You can use the (^) symbol on the bottom right of the screen to jump to the top
if there are a lot of requests!

:::

## Which filters to use.

The most useful tab for finding specific requests (and Treatless!) is the
**All** tab, but there are several filters available which simply won't work for
our exchange.

<img src="/img/tutorial/whichfilters.png" alt="Which Filters to Use"  className="thumbnail" />

- since we use `Dragon Age - All Media Types` to sign-up filtering by _Fandom_
  won't help.
- _Characters_ only works if the Sign-Up sheet itself uses the Characters field;
  since our sign-up sheet uses the Relationships field this will not work for
  us.
- we do not allow _Optional Tags_ during sign-up.
- we do not use _Archive Warnings_ during sign-up.

## Filtering relationships.

If you're looking to create for a specific character or ship or want to see
what's been requested for a specific character or ship this is the place to
start. Using the _Relationships_ field you can search for an entire tag (i.e.
`Alistair/Morrigan/Female Tabris`), or for just an individual character (i.e.
`Bull`).

<img src="/img/tutorial/shipfilter.png" alt="Relationship Filter"  className="thumbnail" />

It's important to note that by default the filter does NOT look for exact
matches. In fact it uses an "and" to search. This means that entering
`Bull Hawke` would pull up any tags where both The Iron Bull AND Hawke (Female
Hawke, Male Hawke, Carver Hawke, Bethany Hawke, Leandra Hawke, etc) show up. To
pull up an <u>exact</u> match for a character who shares first or last names
with another character you need to enclose it in quotes (i.e. "Male Hawke").

<img src="/img/tutorial/exactshipfilter.png" alt="Exact Relationship Filter using Quotes" className="thumbnail" />

**Other search short cuts include:**

- Using `|` (vertical line) for "or". `Tabris | Mahariel` would provide a list
  of requests where either Tabris or Mahariel (of any gender) shows up in the
  ship.
- Using `!` (exclamation) for "not". `Aeducan !Female` would provide a list of
  requests with Male or Nonbinary Aeducans.
- Combining multiple options. `Alistair Morrigan Amell | Cousland !Female` would
  look for requests with Alistair and Morrigan and either an Amell or Cousland
  not containing the word Female (so Male or Nonbinary).

## Filtering prompts.

The _Prompts_ field is useful as a filter if you're looking to write or draw a
specific trope, kink, etc. For example, if you're really in the mood to give
someone a BDSM treat you can filter on `BDSM`. This field is more limited than
the _Relationships_ field as the "or" and "not" designations do not work.
However, using quotes for an exact match on a phrase <u>does</u> work. This
means you can filter for `"coffee shop au"` and find only that phrase rather
than searching `coffee shop au` and getting results which have `coffee` and
`shop` and `au` as separate searches.

<img src="/img/tutorial/coffeeshopau.png" alt="Exact Coffee Shop AU" className="thumbnail" />

<img src="/img/tutorial/promptsearch.png" alt="Coffee Shop AU" className="thumbnail" />

Notice the filter without quotations returns more results than the filter with
quotations.

:::warning

Please be sure to read the prompts that are returned **thoroughly**. This filter
can't tell if the person has listed your search as a want or a _DNW_, it can
only detect that the words are present in the request.

:::

## Filtering by type (and treatless!).

In order to help with matching, our sign-ups use the _Freeform_ field to
designate whether fanart or fanfic are being requested. For your assigned
recipient, you should look for the `Fanfic` or `Fanart` tags on their prompt
which designates their desire for their main gift.

If you're looking to complete treats of a specific type, you can search for
participants who want those treats using the below tags:

- `Treats - Fanart` for Fanart treats.
- `Treats - Fanfic` for Fanfic treats.
- `Treats - Other` for alternative fanwork treats.

:::tip

This field is <u>not</u> case sensitive, but it is limited to searching for only
one tag at a time.

:::

:::warning

Be sure to use the full tags listed above for searching for treats to give.
Entering just `Treats` will return every tag that has the word "treats" in it
including `No Treats Please`, and searching for just "fanfic" or "fanart" could
return requests which are only looking for those as a <u>Main</u> gift and not a
treat.

:::

<img src="/img/tutorial/freeformfilter.png" alt="Searching For Treats Types"  className="thumbnail" />

In addition, you can tell if someone has received a treat, because the Mods will
be adding a `Treat Received` tag on their prompts. That means you can find
Treatless participants by searching for `!"Treat Received"` in this field.

<img src="/img/treatreceived.png" alt="Treatless Filtering" className="thumbnail" />

You can read more about treats in the
[Treats & Treatless FAQ](/docs/exchange/treats).

## Searching for AO3 Users.

On the far right of the screen there is a **User Search** tab which allows you
to find a specific user's prompt. You can use this to find an easier to read
version of your assigned recipients's requests or look for friends' sign-ups.
The search requires the <u>exact</u> username with punctuation, capital letters,
etc, in order to work.

Simply enter the username in the search and hit go.

<img src="/img/tutorial/usersearch.png" alt="User Search"  className="thumbnail" />

This will pull every request from the user and display them below.

<img src="/img/tutorial/usersearch1.png" alt="User Results"  className="thumbnail" />

## Filtering the tagset.

AutoAo3 also loads the entire tagset for viewing into the app. You can see the
entire list or filter by character on the **Tagset** tab to the right of the
**All** tab. To view the tags included in our tagset, click on
`All Fandoms in All Catgories` → `Dragon Age - All Media Types`. This brings up
the entire nominated tag list. You can then use the _Filter Characters_ field to
look for ships which have a specific character or scroll through to view the
whole list.

<img src="/img/tutorial/tagsetfilter.png" alt="Tagset Filter" className="thumbnail" />

<p role="note">The Nominations Spreadsheet remains up throughout and after the exchange, so you can always check it for tags as well.</p>

## Bookmarking requests.

You can use the app to bookmark fandoms (not very useful for this exchange) or
specific requests you're interested in fulfilling. The bookmarks are stored
<u>per browser</u>. There are instructions for how to move your bookmarks across
browsers if you need/want to under _Show Backup Instructions_. To bookmark
something, simply click the heart next to the name.

<img src="/img/tutorial/bookmarking.png" alt="Click the Heart to Bookmark" className="thumbnail" />

Anything you bookmark is moved to the **Bookmarks** tab for you. To remove,
simply click the heart again.

<img src="/img/tutorial/bookmarkstab.png" alt="Bookmarks Tab" className="thumbnail" />

<p role="note">The bookmarks feature is only available after sign-ups close!</p>
