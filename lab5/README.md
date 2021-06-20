# Requirements

## Visibility: Where am I? What can I do from here?
The following items must be present and easily visible. You have to think about how to organize the
information, and how to present it.
- Health clinic Information:
    - on which site the user is (logo, image, or company badge)
    - location (health service address)
    - the services offered and their prices (the user wouldn’t want bad surprises once at the clinic – include at least 5 services)
    - who are the experts? (the user wants to be confident and to know a little more about the experts working at the health clinic – describe at least 3 experts)
- Health clinic possible user actions:
    - Selection of a service
    - Selection of a date and time
    - Enter their contact information

## Consistency: The elements that I see are consistent within the page, and consistent with the standards that I know.
- Aesthetic consistency:
    - Decide on which elements in your page will create a consistent look.
    - Decide on the meaning of each font and color, in your page, to improve consistency.
    - Also, remember that "Fonts have moods". Bootstrap uses the Helvetica Neue font, but maybe it doesn't suit your business. Is it a fun easy-going health service provider or one that is more traditional and wants to offer a very classical look?

- Functional consistency
    - External
        - using standard Bootstrap components gives you this consistency of known functionality (lists, buttons)
        - use of standard navigation patterns
    - Internal
        - Bootstrap already suggests color choices to express different types of messages (success, warning, danger, etc. You can adapt these color choices to “fit” the style of site you want to show.


## Module 5 Requirements (Previous still apply)

### Two new functional requirements (all previous requirements still hold):
- Currently, your site asks a user to choose a service and a date. Now, your site should also allow the user to choose the expert/professional of their choice (e.g. the client wants an appointment for knee rehabilitation with physiotherapist Xu Tao).
- To guarantee a service reservation, the user must provide their credit card information. You must add a payment section to your site.

### Requirements in relation to human cognition:
- Attention: To make sure that users "know where they are" when they return to the site (after being distracted for example), it is useful to add a menu, such as Navbar, at the top of the page. The tendency of users will often be to look at the top of the page (focus point), and check if there is a menu there. The Navbar that you will add will in fact only be a menu whose options bring the user to the right place on your page. Do not create new pages, your new menu will contain pointers to sections on your page. (You can see an example in the base code I provide.)
- Memory: In connection with the limits of a user's short-term memory, avoid having
menus that are too long. If you offer 10 types of services, for example, organize these
services into sub-groups.
- Perception: Review the laws of Gestalt as you look at your site. For example:
    - Law of Similarity: do you have similar elements (same colors, same icons, etc.) that help to see a group?
    - Law of Figure and Ground: do you have clearly visible icons on various background colors?
    - Law of Focal Point: do you have elements that will attract the user’s attention (such as the navbar mentioned above)?
### Requirements in relation to visual communication tools (icons):
- We discussed at length the icons and the difficulty of choosing good icons, especially for actions or abstract concepts for which it is more difficult to find good metaphors or representations. You will need to think critically about your choice of icons; you must add icons on your page for:
    - Services
    - Experts/Professionals
    - Payment
    - Two other elements of your choice
- You will see in the base code that we have put some icons (not really appropriate ones!) which come from an icon bank (Icons 8). There are several other icon banks. You can also draw your own icons if you want. Note that one of the icons is visible on a white background, but not on a black background. You have to be careful to avoid that.
### New requirements linked to the design principles presented in the book Design of Everyday

Things by Dr. Norman. In the previous laboratory, your requirements included visibility and consistency. In this lab, we look more specifically at feedback and constraints, but also come back to other principles.

Visibility and Affordance: I see what I can do and understand how to do it.
- Help the user understand the information to enter:
    - Using tooltips, help the users to understand what they should provide as information and why. For example, asking for a credit card may seem strange to them, and therefore they should be told that it is in the event of a last-minute cancellation (or other reason you might choose).
- Highlighting of entries:
    - When users put their mouse on an entry box, change the color of the entry or emphasize this entry in another way.
- Constraints: I can only make acceptable choices, and enter appropriate information
- Validation of inputs: When users enter information into an input component of type "text", they can write anything. You will need to use regular expressions to validate the format of the following entries:
    - Telephone with format (xxx) xxx-xxxx (or other, at your choice)
    - Credit card number with format "xxxx xxxx xxxx xxxx"
    - Hiding of unavailable dates: When users choose a date for a service, they should be presented with a calendar. In this calendar, certain dates must be unavailable.
    - Weekends (or Sunday/Monday, as you wish)
    - Dates which do not correspond to the availability of the chosen professional. You will need to have a data table in your code, such as(Daniel, Tuesday-WednesdayThursday, Johanne, Tuesday-Wednesday) which establishes the working days of each professional. So, when the user chooses Daniel, for example, the only calendar days available should be Tuesday-Wednesday-Thursday.

### Feedback: What just happened? Did I make a mistake?
- Input errors: When users enter information into a component of type "text", they can write anything. In addition to validating these entries (see constraints section) you must give error messages.
- Any other feedback you think is necessary to help the user understand what happened.

### Consistency: The elements that I see are consistent within the page, and consistent with the standards that I know.
- Choice of jQuery UI theme related to the atmosphere of your site.
    - jQuery UI offers themes for your components (https://jqueryui.com themeroller/ ), and you must choose a theme that works well for your site
    
You will see in the base code that I have chosen a theme and you can change it.
- Choice of icons related to the atmosphere of your site
    - You need to add icons to your site, be sure to choose icon styles that respect the style of your site