# Crawls old html files to get strings. Add html files to this dir and run with python 3. Be sure to remove the \n chars from the outputs

import pprint
import json
import glob
import traceback

from bs4 import BeautifulSoup, NavigableString


def getDates(soup):
    dates = {}
    options = soup.find_all("option")
    for date in options:
        stringdate = date.attrs.get("value")
        dates[stringdate] = date.string
    return dates


def parseDate(rawdate, soup):
    dates = getDates(soup)
    return dates.get(rawdate, "NaN")


# For each page
for filepath in glob.iglob('pages/*.html'):
    filepath = ".\\" + filepath
    soup = BeautifulSoup(open(filepath, encoding="utf-8"), "html.parser")
    project_wrappers = soup.find_all("div", class_="proyectos-wrapper")
    # For each date
    page_entries = []
    for project_wrapper in project_wrappers:
        new_date_entries = {"date": parseDate(project_wrapper.attrs.get("id"), soup), "projects": []}
        # For each milestone
        for milestone in project_wrapper.children:
            title = ""
            desc = ""
            images = []
            poster = ""
            if type(milestone) != NavigableString:
                for descendant in milestone.descendants:
                    try:
                        if descendant.name == "img":
                            images.append(descendant.attrs.get("src"))
                        elif descendant.name == "p" and descendant.attrs.get("class")[0] == "title":
                            title = descendant.string
                        elif descendant.name == "a":
                            poster = descendant.attrs.get("href")
                        elif descendant.name == "div":
                            classy = descendant.attrs.get("class")  # .find("desc")
                            if classy[0] == "desc":
                                desc = "".join([str(item) for item in descendant.contents])
                    except TypeError:
                        # print("typerror")
                        pass
                    except AttributeError:
                        # print("attributeerror")
                        pass
                # Log the Milestone to the projects
                current_project = {"title": title, "desc": desc, "images": images, "poster": poster}
                new_date_entries.get("projects").append(current_project)
        page_entries.append(new_date_entries)
    with open(filepath + ".json", "w") as outfile:
        json.dump(page_entries, outfile)
