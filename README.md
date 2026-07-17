### This is a personal fork to fix an error I encountered when adding a new comic/manga for tracking. It resulted in no search results and an error message, leaving you unable to track what you bookmarked, which is required for syncing read status. This error occurred after updating Kavita past v.0.8.8.3 (I personally noticed it on version v0.9.0.2). I also included the Reading List support that has been stuck in limbo on the main repo since last year.

##### My themes for Paperback are available here: [`https://github.com/KenWeTech/themes-paperback`](https://github.com/KenWeTech/themes-paperback)

-----

# Kavya ![Generic badge](https://img.shields.io/badge/version-1.3.6_fix-green.svg)
Kavya, A [Kavita](https://www.kavitareader.com/) client extension, for [Paperback](https://paperback.moe/)


## Installation source
You can install paperback extension source from below url

[`https://kenketech.github.io/kavya-paperback`](https://KenWeTech.github.io/kavya-paperback)

## Requirements
- 0.8 or newer version of Paperback
- Stable version of Kavita (Tested with [linuxserver/kavita](https://docs.linuxserver.io/images/docker-kavita))


## Setting up Page Size
Set up page size in kavya setting page, 20 for iOS and 40 for iPadOS (Default is set to 40)

## Limitations

- Each series you want to track have to be added to a collection and track list.
- Tracking only works when you read the comic in the viewer (does not work with mark as read).

## Unsupported Formats

Paperback's reader only handles image-based pages. The following content types will **not** work through this extension:

- **EPUB** — EPUBs are reflowable HTML/text documents that require a dedicated renderer. Kavita serves them through its own web-based reader, which cannot be replicated in Paperback's image viewer. Attempting to open an EPUB chapter will result in every page returning a 404 error.
- **Book/Novel libraries** — Libraries of type Book or Novel in Kavita are primarily EPUB-based and will have the same issue.

**What does work:**
- Manga and comics (CBZ, CBR, ZIP — image-based)
- PDFs (Kavita extracts each page as an image server-side)

To keep your home screen clean, enable **Exclude Book & Novel Type Libraries** in the Kavya source settings. This hides unsupported libraries entirely.
