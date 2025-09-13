export const unitData = {
  unit1: {
    title: "Unit I: Introduction to Web Technology",
    description: "Comprehensive introduction to Internet, World Wide Web, and web technologies",
    duration: "15 Hours",
    topics: [
      {
        id: "internet-intro",
        title: "Introduction to Internet",
        content: `The Internet is a global network of interconnected computers that communicate using standardized protocols. It's the foundation of modern digital communication and commerce.

Key Concepts:
• The Internet began as ARPANET in 1969
• It's a decentralized network with no central authority
• Uses packet-switching technology for data transmission
• Connects billions of devices worldwide

How Internet Works:
The Internet operates on a client-server model where:
1. Clients (your devices) request information
2. Servers store and provide information
3. Routers direct data packets between networks
4. ISPs provide access to the global network

Internet vs. Web:
Many people confuse the Internet with the World Wide Web:
• Internet: The underlying network infrastructure
• Web: A service that runs on top of the Internet using HTTP/HTTPS protocols`,
        examples: [
          {
            title: "Internet Connection Example",
            description: "How data travels from your computer to a website",
            code: `1. You type www.example.com in your browser
2. DNS server translates domain to IP address (192.168.1.1)
3. Your ISP routes request through multiple networks
4. Request reaches the web server
5. Server sends back HTML, CSS, JS files
6. Your browser renders the webpage`,
            language: "text"
          }
        ],
        keyPoints: [
          "Internet is the global network infrastructure",
          "Uses TCP/IP protocol suite for communication",
          "Decentralized architecture ensures reliability",
          "Foundation for all web services and applications"
        ]
      },
      {
        id: "www-intro",
        title: "Introduction to World Wide Web (WWW)",
        content: `The World Wide Web (WWW) is an information system that operates over the Internet. It was invented by Tim Berners-Lee in 1989 at CERN.

Core Components of WWW:
1. Web Browsers - Software to access and display web content
2. Web Servers - Computers that store and serve web pages
3. Web Pages - Documents written in HTML with links to other pages
4. URLs - Unique addresses for web resources
5. HTTP/HTTPS - Protocols for transferring web content

How WWW Works:
• Uses hypertext to link documents together
• Browsers send HTTP requests to web servers
• Servers respond with HTML, CSS, and JavaScript
• Browsers render the content for users to view

Web Standards:
The WWW follows open standards defined by W3C:
• HTML for structure
• CSS for presentation
• JavaScript for interactivity
• Various protocols for communication`,
        examples: [
          {
            title: "Basic Web Page Structure",
            description: "A simple HTML page showing WWW fundamentals",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
    <meta charset="UTF-8">
</head>
<body>
    <h1>Welcome to the World Wide Web!</h1>
    <p>This is a <a href="https://example.com">hyperlink</a> to another page.</p>
    <img src="image.jpg" alt="An example image">
</body>
</html>`,
            language: "html"
          }
        ],
        keyPoints: [
          "WWW is a service that runs on the Internet",
          "Uses hypertext linking to connect documents",
          "Based on open standards (HTML, CSS, JavaScript)",
          "Accessible through web browsers"
        ]
      },
      {
        id: "w3c",
        title: "W3C (World Wide Web Consortium)",
        content: `The World Wide Web Consortium (W3C) is the main international standards organization for the World Wide Web. Founded and led by Tim Berners-Lee, it develops web standards and guidelines.

Mission of W3C:
"To lead the World Wide Web to its full potential by developing protocols and guidelines that ensure the long-term growth of the Web."

Key Responsibilities:
1. Developing Web Standards - HTML, CSS, XML, etc.
2. Ensuring Web Accessibility - Making web content accessible to all users
3. Internationalization - Supporting multiple languages and cultures
4. Web Architecture - Defining how the web should work
5. Quality Assurance - Testing and validation tools

Major W3C Standards:
• HTML (HyperText Markup Language)
• CSS (Cascading Style Sheets)
• XML (eXtensible Markup Language)
• SVG (Scalable Vector Graphics)
• WCAG (Web Content Accessibility Guidelines)
• DOM (Document Object Model)

W3C Process:
Standards go through several stages:
1. Working Draft (WD)
2. Candidate Recommendation (CR)
3. Proposed Recommendation (PR)
4. W3C Recommendation (REC)`,
        examples: [
          {
            title: "HTML5 Standard Example",
            description: "Modern HTML5 markup following W3C standards",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>W3C Compliant Page</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h1>Web Standards Matter</h1>
            <p>Following W3C standards ensures cross-browser compatibility.</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2024 Web Standards Example</p>
    </footer>
</body>
</html>`,
            language: "html"
          }
        ],
        keyPoints: [
          "W3C sets global web standards",
          "Founded by Tim Berners-Lee in 1994",
          "Ensures interoperability across browsers and platforms",
          "Promotes accessibility and internationalization"
        ]
      },
      {
        id: "connectivity-levels",
        title: "Levels of Internet Connectivity",
        content: `Different methods of connecting to the Internet offer varying speeds, costs, and reliability. Understanding these options helps choose the right connection type.

1. Dial-up Connection:
• Uses existing telephone lines
• Speed: Up to 56 Kbps
• Pros: Inexpensive, widely available
• Cons: Very slow, ties up phone line
• Best for: Basic email and text browsing

2. Leased Line:
• Dedicated connection between two points
• Speed: T1 (1.544 Mbps) to T3 (44.736 Mbps)
• Pros: Guaranteed bandwidth, high reliability
• Cons: Expensive, requires professional installation
• Best for: Businesses requiring constant connectivity

3. DSL (Digital Subscriber Line):
• Uses existing phone lines with special technology
• Speed: 1-100 Mbps depending on type
• Types: ADSL, SDSL, VDSL
• Pros: Always-on connection, doesn't affect phone
• Cons: Speed decreases with distance from exchange

4. VSAT (Very Small Aperture Terminal):
• Satellite-based communication
• Speed: 1-20 Mbps
• Pros: Available in remote areas
• Cons: High latency, weather dependent
• Best for: Rural or remote locations`,
        examples: [
          {
            title: "Connection Speed Comparison",
            description: "Time to download a 100MB file with different connections",
            code: `Connection Type    | Speed    | Download Time
-------------------|----------|---------------
Dial-up           | 56 Kbps  | ~4 hours
DSL (Basic)       | 1 Mbps   | ~13 minutes  
DSL (High-speed)  | 10 Mbps  | ~1.3 minutes
Cable Broadband   | 50 Mbps  | ~16 seconds
Fiber Optic       | 1 Gbps   | ~0.8 seconds
VSAT              | 5 Mbps   | ~2.7 minutes`,
            language: "text"
          }
        ],
        keyPoints: [
          "Dial-up: Slowest but cheapest option",
          "Leased lines: Most reliable for businesses",
          "DSL: Good balance of speed and cost",
          "VSAT: Best for remote locations"
        ]
      },
      {
        id: "connectivity-requirements",
        title: "Requirements for Internet Connectivity",
        content: `To establish Internet connectivity, several components and requirements must be met:

Hardware Requirements:
1. Computer or device with network capability
2. Modem or network adapter
3. Network cables (for wired connections)
4. Router (for sharing connection)
5. Network Interface Card (NIC)

Software Requirements:
1. Operating System with networking support
2. Network drivers
3. TCP/IP protocol stack
4. Web browser
5. Email client (optional)
6. Firewall and antivirus software

Service Requirements:
1. Internet Service Provider (ISP) account
2. IP address assignment (static or dynamic)
3. DNS server configuration
4. Authentication credentials (username/password)

Network Configuration:
• IP Address: Unique identifier for your device
• Subnet Mask: Defines network boundaries
• Default Gateway: Router's IP address
• DNS Servers: Translate domain names to IP addresses

Security Considerations:
• Firewall configuration
• Antivirus software
• Secure passwords
• Regular software updates
• VPN for secure connections`,
        examples: [
          {
            title: "Basic TCP/IP Configuration",
            description: "Example network settings for Internet connectivity",
            code: `Network Configuration Example:
============================
IP Address:      192.168.1.100
Subnet Mask:     255.255.255.0
Default Gateway: 192.168.1.1
Primary DNS:     8.8.8.8
Secondary DNS:   8.8.4.4

Connection Type: DHCP (automatic)
or
Connection Type: Static IP (manual)`,
            language: "text"
          }
        ],
        keyPoints: [
          "Hardware: Computer, modem, cables, router",
          "Software: OS, drivers, protocols, browser",
          "Service: ISP account and configuration",
          "Security: Firewall, antivirus, updates"
        ]
      }
    ]
  },
  unit2: {
    title: "Unit II: Introduction to Markup Languages",
    description: "Complete guide to HTML and markup language fundamentals",
    duration: "20 Hours",
    topics: [
      {
        id: "markup-definitions",
        title: "Definition of Markup Languages",
        content: `Markup languages are computer languages that use tags to define elements within a document. They provide structure and meaning to content.

GML (Generalized Markup Language):
• Developed by IBM in 1960s
• First standardized markup language
• Predecessor to SGML
• Used for document formatting and structure

SGML (Standard Generalized Markup Language):
• ISO standard (ISO 8879:1986)
• Meta-language for defining markup languages
• Very complex and powerful
• Parent language of HTML and XML

VRML (Virtual Reality Modeling Language):
• Used for creating 3D interactive vector graphics
• Defines 3D objects and worlds
• Now largely replaced by X3D
• Uses nodes and fields for 3D scene description

UML (Unified Modeling Language):
• Not a markup language, but a modeling language
• Used for software design and architecture
• Visual representation of system design
• Includes diagrams like class, sequence, use case

XML (eXtensible Markup Language):
• Simplified subset of SGML
• Self-describing data format
• Platform and language independent
• Used for data storage and transmission

XHTML (eXtensible HyperText Markup Language):
• HTML reformulated as XML application
• Stricter syntax rules than HTML
• Better structure and validation
• Bridge between HTML and XML`,
        examples: [
          {
            title: "Markup Language Comparison",
            description: "Examples showing different markup syntaxes",
            code: `<!-- HTML Example -->
<p>This is a paragraph in HTML</p>

<!-- XHTML Example -->
<p>This is a paragraph in XHTML</p>

<!-- XML Example -->
<book>
    <title>Web Technology</title>
    <author>John Doe</author>
    <price currency="USD">29.99</price>
</book>

<!-- SGML Example -->
<!DOCTYPE book [
    <!ELEMENT book (title, author, price)>
    <!ELEMENT title (#PCDATA)>
    <!ELEMENT author (#PCDATA)>
    <!ELEMENT price (#PCDATA)>
    <!ATTLIST price currency CDATA #REQUIRED>
]>`,
            language: "markup"
          }
        ],
        keyPoints: [
          "GML: First markup language by IBM",
          "SGML: Complex meta-language standard",
          "VRML: 3D graphics description",
          "XML: Simplified, extensible data format",
          "XHTML: HTML with XML rules"
        ]
      },
      {
        id: "html-basics",
        title: "HTML Basics and Document Structure",
        content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides structure and meaning to web content.

HTML Document Structure:
Every HTML document follows a standard structure with these main parts:

1. DOCTYPE Declaration - Tells browser the HTML version
2. HTML Element - Root element containing all content
3. Head Section - Metadata not displayed on page
4. Body Section - Visible content of the page

Essential HTML Elements:
• <!DOCTYPE html> - HTML5 document type
• <html> - Root element with language attribute
• <head> - Contains metadata, title, links to CSS/JS
• <title> - Page title shown in browser tab
• <meta> - Metadata like charset, viewport
• <body> - Main content area
• <h1> to <h6> - Headings in order of importance
• <p> - Paragraphs of text
• <a> - Links to other pages or sections
• <img> - Images with src and alt attributes
• <div> - Generic container for grouping
• <span> - Inline container for styling

Global Attributes:
These attributes can be used on any HTML element:
• id - Unique identifier for the element
• class - CSS class name(s) for styling
• style - Inline CSS styles
• title - Tooltip text on hover
• lang - Language of element content
• dir - Text direction (ltr or rtl)
• tabindex - Tab order for keyboard navigation`,
        examples: [
          {
            title: "Complete HTML Document Structure",
            description: "A properly structured HTML5 document",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML basics">
    <meta name="keywords" content="HTML, web development, tutorial">
    <title>HTML Basics - Web Technology</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .highlight { background-color: yellow; }
    </style>
</head>
<body>
    <header>
        <h1 id="main-heading">Welcome to HTML</h1>
        <nav>
            <a href="#section1">Section 1</a> |
            <a href="#section2">Section 2</a>
        </nav>
    </header>
    
    <main>
        <section id="section1">
            <h2>Introduction</h2>
            <p>HTML is the <span class="highlight">foundation</span> of web pages.</p>
            <img src="html-logo.png" alt="HTML5 Logo" width="100" height="100">
        </section>
        
        <section id="section2">
            <h2>Key Features</h2>
            <ul>
                <li>Structure content</li>
                <li>Semantic meaning</li>
                <li>Cross-platform compatibility</li>
            </ul>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 HTML Tutorial. All rights reserved.</p>
    </footer>
</body>
</html>`,
            language: "html"
          }
        ],
        keyPoints: [
          "DOCTYPE declares HTML version",
          "Head contains metadata, not visible content",
          "Body contains all visible page content",
          "Global attributes work on any element"
        ]
      },
      {
        id: "html-tables",
        title: "HTML Tables",
        content: `HTML tables are used to display data in rows and columns. They should be used for tabular data, not for page layout.

Table Structure:
• <table> - Main container for the table
• <thead> - Table header section
• <tbody> - Table body section  
• <tfoot> - Table footer section
• <tr> - Table row
• <th> - Table header cell
• <td> - Table data cell
• <caption> - Table caption/title

Table Attributes:
• border - Border width around table
• cellpadding - Space inside cells
• cellspacing - Space between cells
• width - Table width
• align - Table alignment

Cell Attributes:
• colspan - Span multiple columns
• rowspan - Span multiple rows
• align - Cell content alignment
• valign - Vertical alignment
• bgcolor - Background color
• width - Cell width

Advanced Features:
• <colgroup> - Group columns for styling
• <col> - Individual column properties
• scope attribute - Associates headers with data
• summary attribute - Table description for accessibility`,
        examples: [
          {
            title: "Complete Table Example",
            description: "A comprehensive table with headers, sections, and styling",
            code: `<table border="1" cellpadding="8" cellspacing="0" width="100%">
    <caption><strong>Student Grade Report</strong></caption>
    
    <colgroup>
        <col width="30%">
        <col width="20%">
        <col width="20%">
        <col width="20%">
        <col width="10%">
    </colgroup>
    
    <thead>
        <tr bgcolor="#f0f0f0">
            <th scope="col">Student Name</th>
            <th scope="col">Math</th>
            <th scope="col">Science</th>
            <th scope="col">English</th>
            <th scope="col">Average</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <td>John Smith</td>
            <td align="center">85</td>
            <td align="center">92</td>
            <td align="center">78</td>
            <td align="center"><strong>85.0</strong></td>
        </tr>
        <tr bgcolor="#f9f9f9">
            <td>Jane Doe</td>
            <td align="center">90</td>
            <td align="center">88</td>
            <td align="center">92</td>
            <td align="center"><strong>90.0</strong></td>
        </tr>
        <tr>
            <td>Mike Johnson</td>
            <td align="center">76</td>
            <td align="center">82</td>
            <td align="center">85</td>
            <td align="center"><strong>81.0</strong></td>
        </tr>
    </tbody>
    
    <tfoot>
        <tr bgcolor="#e0e0e0">
            <th scope="row">Class Average</th>
            <td align="center"><strong>83.7</strong></td>
            <td align="center"><strong>87.3</strong></td>
            <td align="center"><strong>85.0</strong></td>
            <td align="center"><strong>85.3</strong></td>
        </tr>
    </tfoot>
</table>`,
            language: "html"
          },
          {
            title: "Table with Merged Cells",
            description: "Demonstrating colspan and rowspan",
            code: `<table border="1" cellpadding="5" cellspacing="0">
    <tr>
        <th rowspan="2">Product</th>
        <th colspan="2">Sales (in thousands)</th>
        <th rowspan="2">Total</th>
    </tr>
    <tr>
        <th>Q1</th>
        <th>Q2</th>
    </tr>
    <tr>
        <td>Laptops</td>
        <td align="right">120</td>
        <td align="right">150</td>
        <td align="right"><strong>270</strong></td>
    </tr>
    <tr>
        <td>Tablets</td>
        <td align="right">80</td>
        <td align="right">95</td>
        <td align="right"><strong>175</strong></td>
    </tr>
    <tr bgcolor="#f0f0f0">
        <th>Total</th>
        <td align="right"><strong>200</strong></td>
        <td align="right"><strong>245</strong></td>
        <td align="right"><strong>445</strong></td>
    </tr>
</table>`,
            language: "html"
          }
        ],
        keyPoints: [
          "Use tables only for tabular data, not layout",
          "Always include table headers with <th>",
          "Use colspan and rowspan to merge cells",
          "Add captions for accessibility"
        ]
      },
      {
        id: "html-forms",
        title: "HTML Forms",
        content: `HTML forms are used to collect user input and send data to web servers. They are essential for interactive web applications.

Form Structure:
• <form> - Container for all form elements
• <input> - Various input types (text, password, email, etc.)
• <textarea> - Multi-line text input
• <select> - Dropdown lists
• <option> - Choices in select lists
• <button> - Clickable buttons
• <label> - Labels for form controls
• <fieldset> - Groups related form elements
• <legend> - Caption for fieldset

Form Attributes:
• action - URL where form data is sent
• method - HTTP method (GET or POST)
• enctype - Encoding type for form data
• target - Where to display response
• autocomplete - Enable/disable autocomplete

Input Types:
• text - Single line text
• password - Masked text input
• email - Email validation
• number - Numeric input
• date - Date picker
• checkbox - Multiple selections
• radio - Single selection from group
• file - File upload
• submit - Submit button
• reset - Reset form button
• hidden - Hidden data

Input Attributes:
• name - Field name for server processing
• value - Default or current value
• placeholder - Hint text
• required - Makes field mandatory
• disabled - Disables the input
• readonly - Prevents editing
• maxlength - Maximum character limit`,
        examples: [
          {
            title: "Comprehensive Contact Form",
            description: "A complete form with various input types and validation",
            code: `<form action="submit-contact.php" method="POST" enctype="multipart/form-data">
    <fieldset>
        <legend>Personal Information</legend>
        
        <p>
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName" 
                   placeholder="Enter your first name" required maxlength="50">
        </p>
        
        <p>
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName" 
                   placeholder="Enter your last name" required maxlength="50">
        </p>
        
        <p>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" 
                   placeholder="your@email.com" required>
        </p>
        
        <p>
            <label for="phone">Phone:</label><br>
            <input type="tel" id="phone" name="phone" 
                   placeholder="(123) 456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
        </p>
        
        <p>
            <label for="birthdate">Birth Date:</label><br>
            <input type="date" id="birthdate" name="birthdate">
        </p>
    </fieldset>
    
    <fieldset>
        <legend>Preferences</legend>
        
        <p>
            <label for="country">Country:</label><br>
            <select id="country" name="country" required>
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="other">Other</option>
            </select>
        </p>
        
        <p>
            <label>Gender:</label><br>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label>
        </p>
        
        <p>
            <label>Interests:</label><br>
            <input type="checkbox" id="web" name="interests[]" value="web">
            <label for="web">Web Development</label><br>
            <input type="checkbox" id="design" name="interests[]" value="design">
            <label for="design">Graphic Design</label><br>
            <input type="checkbox" id="mobile" name="interests[]" value="mobile">
            <label for="mobile">Mobile Apps</label>
        </p>
        
        <p>
            <label for="experience">Experience Level:</label><br>
            <select id="experience" name="experience">
                <option value="beginner">Beginner</option>
                <option value="intermediate" selected>Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
            </select>
        </p>
    </fieldset>
    
    <fieldset>
        <legend>Additional Information</legend>
        
        <p>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="5" cols="50" 
                      placeholder="Tell us about yourself..." maxlength="500"></textarea>
        </p>
        
        <p>
            <label for="resume">Upload Resume:</label><br>
            <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
        </p>
        
        <p>
            <input type="checkbox" id="newsletter" name="newsletter" value="yes">
            <label for="newsletter">Subscribe to our newsletter</label>
        </p>
        
        <p>
            <input type="checkbox" id="terms" name="terms" value="agreed" required>
            <label for="terms">I agree to the Terms and Conditions</label>
        </p>
    </fieldset>
    
    <p>
        <button type="submit">Submit Form</button>
        <button type="reset">Reset Form</button>
        <input type="hidden" name="form_id" value="contact_form_v2">
    </p>
</form>`,
            language: "html"
          }
        ],
        keyPoints: [
          "Always use labels for accessibility",
          "Group related fields with fieldset",
          "Use appropriate input types for validation",
          "Include required validation where needed"
        ]
      }
    ]
  },
  unit3: {
    title: "Unit III: Cascading Style Sheet",
    description: "Complete guide to CSS styling and presentation",
    duration: "10 Hours",
    topics: [
      {
        id: "css-introduction",
        title: "Introduction to CSS",
        content: `CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It separates content from presentation, making web pages more maintainable and flexible.

What is CSS?
CSS stands for Cascading Style Sheets and is used to:
• Style HTML elements (colors, fonts, spacing)
• Control layout and positioning
• Create responsive designs
• Add animations and transitions
• Maintain consistent styling across multiple pages

Why CSS is Important:
1. Separation of Concerns - Content (HTML) separate from presentation (CSS)
2. Reusability - One CSS file can style multiple HTML pages
3. Maintainability - Easier to update styles across entire website
4. Flexibility - Different styles for different devices/media
5. Performance - Reduces HTML file size and improves loading

CSS History:
• CSS1 (1996) - Basic styling capabilities
• CSS2 (1998) - Added positioning, media types
• CSS2.1 (2004) - Corrections and clarifications
• CSS3 (2011+) - Modular approach, new features
• CSS4 - Future specifications in development

Browser Support:
Modern browsers have excellent CSS support, but older versions may have limitations:
• Always test across different browsers
• Use vendor prefixes when needed (-webkit-, -moz-, -ms-)
• Consider progressive enhancement
• Use CSS resets or normalize.css for consistency`,
        examples: [
          {
            title: "CSS in Action - Before and After",
            description: "Comparing HTML with and without CSS styling",
            code: `<!-- HTML without CSS -->
<h1>Welcome to My Website</h1>
<p>This is a paragraph of text.</p>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- CSS to transform the appearance -->
<style>
h1 {
    color: #333;
    font-family: Arial, sans-serif;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
}

p {
    font-family: Georgia, serif;
    line-height: 1.6;
    color: #666;
    font-size: 1.1em;
    max-width: 600px;
    margin: 0 auto 20px;
    text-align: justify;
}

ul {
    list-style-type: none;
    padding: 0;
    max-width: 300px;
    margin: 0 auto;
}

li {
    background-color: #f8f9fa;
    margin-bottom: 10px;
    padding: 15px;
    border-left: 4px solid #007bff;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

li:hover {
    background-color: #e7f3ff;
}
</style>`,
            language: "html"
          }
        ],
        keyPoints: [
          "CSS separates content from presentation",
          "Enables consistent styling across multiple pages",
          "Improves maintainability and performance",
          "Supports responsive and adaptive designs"
        ]
      },
      {
        id: "css-syntax",
        title: "CSS Syntax and Selectors",
        content: `CSS follows a specific syntax structure consisting of selectors, properties, and values. Understanding this syntax is fundamental to writing effective CSS.

CSS Syntax Structure:
selector {
    property: value;
    property: value;
}

Components:
• Selector - Targets HTML elements to style
• Property - The aspect to style (color, font-size, etc.)
• Value - The setting for the property
• Declaration - Property-value pair
• Rule Set - Selector with its declarations

CSS Selectors:
1. Universal Selector (*)
   - Selects all elements
   
2. Element Selector (element)
   - Selects all instances of an HTML element
   
3. Class Selector (.classname)
   - Selects elements with specific class attribute
   
4. ID Selector (#idname)
   - Selects element with specific id attribute
   
5. Attribute Selector ([attribute])
   - Selects elements with specific attributes
   
6. Pseudo-class Selector (:pseudo-class)
   - Selects elements in specific states
   
7. Pseudo-element Selector (::pseudo-element)
   - Selects parts of elements

Combinators:
• Descendant ( ) - Selects nested elements
• Child (>) - Selects direct children
• Adjacent Sibling (+) - Selects immediate sibling
• General Sibling (~) - Selects all siblings

Selector Specificity:
CSS uses specificity to determine which rules apply:
• Inline styles: 1000 points
• IDs: 100 points each
• Classes, attributes, pseudo-classes: 10 points each
• Elements: 1 point each`,
        examples: [
          {
            title: "CSS Selector Examples",
            description: "Comprehensive examples of different CSS selectors",
            code: `/* Universal Selector */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Element Selector */
h1 {
    color: blue;
    font-size: 2em;
}

p {
    line-height: 1.5;
    margin-bottom: 1em;
}

/* Class Selector */
.highlight {
    background-color: yellow;
    font-weight: bold;
}

.nav-menu {
    list-style: none;
    display: flex;
}

/* ID Selector */
#header {
    background-color: #333;
    color: white;
    padding: 20px;
}

#main-content {
    max-width: 1200px;
    margin: 0 auto;
}

/* Attribute Selectors */
input[type="text"] {
    border: 1px solid #ccc;
    padding: 10px;
}

a[href^="https"] {
    color: green;
}

img[alt] {
    border: 2px solid blue;
}

/* Pseudo-class Selectors */
a:hover {
    color: red;
    text-decoration: underline;
}

input:focus {
    outline: 2px solid blue;
    background-color: lightyellow;
}

li:first-child {
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

/* Pseudo-element Selectors */
p::first-line {
    font-weight: bold;
}

h1::before {
    content: "★ ";
    color: gold;
}

/* Combinators */
/* Descendant selector */
.sidebar p {
    font-size: 0.9em;
}

/* Child selector */
.nav > li {
    display: inline-block;
}

/* Adjacent sibling selector */
h1 + p {
    font-size: 1.2em;
    color: gray;
}

/* General sibling selector */
h2 ~ p {
    margin-left: 20px;
}

/* Complex selectors */
.article h2:first-of-type {
    border-bottom: 2px solid #333;
}

.form-group input[required]:invalid {
    border-color: red;
}`,
            language: "css"
          }
        ],
        keyPoints: [
          "CSS syntax: selector { property: value; }",
          "Multiple selector types for different targeting needs",
          "Specificity determines which rules take precedence",
          "Combinators allow selection of element relationships"
        ]
      },
      {
        id: "css-properties",
        title: "CSS Properties and Values",
        content: `CSS properties define what aspects of elements you want to style. There are hundreds of CSS properties, each controlling different visual and behavioral aspects.

Text and Font Properties:
• color - Text color
• font-family - Font typeface
• font-size - Text size
• font-weight - Text thickness (normal, bold, 100-900)
• font-style - Normal, italic, or oblique
• text-align - Horizontal alignment
• text-decoration - Underline, strikethrough, etc.
• line-height - Space between lines
• letter-spacing - Space between characters
• text-transform - Uppercase, lowercase, capitalize

Background Properties:
• background-color - Background color
• background-image - Background image
• background-repeat - Image repetition
• background-position - Image position
• background-size - Image sizing
• background-attachment - Fixed or scroll

Box Model Properties:
• width, height - Element dimensions
• margin - Outer space around element
• border - Element border
• padding - Inner space inside element
• box-sizing - How dimensions are calculated

Layout and Positioning:
• display - How element is displayed
• position - Positioning method
• top, right, bottom, left - Position offsets
• float - Element floating
• clear - Clear floating elements
• z-index - Stacking order

Flexbox Properties:
• display: flex - Creates flex container
• flex-direction - Flex axis direction
• justify-content - Main axis alignment
• align-items - Cross axis alignment
• flex-wrap - Wrap flex items
• flex - Flex item growth/shrink`,
        examples: [
          {
            title: "Comprehensive CSS Properties Example",
            description: "A styled card component demonstrating various CSS properties",
            code: `/* CSS for a complete card component */
.card {
    /* Box Model */
    width: 300px;
    height: 400px;
    margin: 20px auto;
    padding: 0;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    
    /* Background */
    background-color: white;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    /* Layout */
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    
    /* Effects */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-header {
    /* Background */
    background-color: rgba(255, 255, 255, 0.95);
    
    /* Box Model */
    padding: 20px;
    margin: 0;
    border-bottom: 1px solid #f0f0f0;
    
    /* Text */
    text-align: center;
}

.card-title {
    /* Font Properties */
    font-family: 'Arial', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
    
    /* Text Properties */
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.2;
    
    /* Box Model */
    margin: 0 0 10px 0;
}

.card-subtitle {
    /* Font Properties */
    font-size: 0.9em;
    font-style: italic;
    color: #666;
    
    /* Box Model */
    margin: 0;
}

.card-body {
    /* Layout */
    flex: 1;
    display: flex;
    flex-direction: column;
    
    /* Box Model */
    padding: 20px;
    
    /* Background */
    background-color: white;
}

.card-text {
    /* Font Properties */
    font-family: Georgia, serif;
    font-size: 1em;
    line-height: 1.6;
    color: #555;
    
    /* Text Properties */
    text-align: justify;
    
    /* Layout */
    flex: 1;
    
    /* Box Model */
    margin-bottom: 20px;
}

.card-button {
    /* Display */
    display: inline-block;
    
    /* Box Model */
    padding: 12px 24px;
    margin: 0 auto;
    border: none;
    border-radius: 6px;
    
    /* Background */
    background-color: #007bff;
    background-image: linear-gradient(45deg, #007bff, #0056b3);
    
    /* Text */
    color: white;
    font-size: 1em;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    /* Effects */
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}

.card-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.4);
}

.card-button:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 123, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
    .card {
        width: 90%;
        margin: 10px auto;
    }
    
    .card-title {
        font-size: 1.2em;
    }
    
    .card-text {
        font-size: 0.9em;
    }
}`,
            language: "css"
          }
        ],
        keyPoints: [
          "Properties control different aspects of styling",
          "Values can be keywords, numbers, colors, or functions",
          "Box model properties control spacing and dimensions",
          "Flexbox provides powerful layout capabilities"
        ]
      }
    ]
  }
};