# Phorest Ecommerce QA Task – Graham Luby

## Description

This project contains an end-to-end UI test set for Phorest’s Gift Card purchasing flow. The main purchase flow and edge cases have been covered by a full set of manual test scripts, which have been executed with evidence enclosed. Three automated test scripts, written using Javascript and Selenium WebDriver, have been included to cover some of the main purchase flows. 
The demo salon, found at https://gift-cards.phorest.com/salons/demous#, served as the testing environment. 

## Technologies used:
* VSCode IDE
* JavaScript
* Selenium WebDriver
* Microsoft Office tools (i.e., Excel, Word)
* Online disposable email address services (i.e., https://www.guerrillamail.com/, https://temp-mail.org/en/)

## Contents:
* User Stories – These were retroactively written following analysis of the website’s purchase flows, edge cases, data flows (i.e., email functionality) and data field requirements. Their function was to serve as a guide when writing the test scripts.
* Manual Test Scripts.xlsx – The manual test scripts. These are included in an Excel spreadsheet, with one test per page. These were written after the user stories had been written.
* List of Tests Needed.docx – This is some “rough work”, serving as a checklist for functionalities to be covered in the tests. Each functionality is marked with the number (in red) of the test which eventually covered it.
* Phorest Project – Bugs Found.docx – A note listing the bugs found while testing.
* Manual Test Evidence – Evidence taken during execution of each manual test, with one Word document per test executed. Test execution was carried out by taking screenshots of each web page and of each action taken, and of each email inbox and individual email.
* phorestProjectAutomatedTest – This automated test script was written in JavaScript paired with Selenium WebDriver, using the VSCode IDE. It was intended to follow the main purchase flow for a $50 gift card. I have attempted many different scripts and access paths to get it working, but after eighteen hours of work on this function alone, I have only been able to interact with the first page intermittently.

## Installation instructions:
* Manual Test Scripts.xlsx – Go to https://github.com/GrahamLuby/PhorestProject > Select "Manual Test Scripts.xlsx" > Select "Download raw file".
* User Stories - Go to https://github.com/GrahamLuby/PhorestProject > Select "User Stories" >  Select "Download raw file".
* List of Tests Needed.docx - Go to https://github.com/GrahamLuby/PhorestProject > Select "List of Tests Needed.docx" >  Select "Download raw file".
* Phorest Project – Bugs Found.docx - Go to https://github.com/GrahamLuby/PhorestProject > Select "Phorest Project – Bugs Found.docx" >  Select "Download raw file".
* Manual Test Evidence - Go to https://github.com/GrahamLuby/PhorestProject > Select "Manual Test Evidence" >  Select "Download raw file".
* phorestProjectAutomatedTest - Go to https://github.com/GrahamLuby/PhorestProject > Select "phorestProjectAutomatedTest" > Clone the repository by opening the terminal, navigating to your preferred location to clone the repository to (i.e., by using the "cd [file path]" command), using the "git clone [repository url]" command, opem VSCode, open the cloned repository, use the VSCode terminal to navigate to the cloned repository's location, install the project's dependencies using the "npm install" command.
