function createNavBar() {
      // Define the links
      const links = [
        { name: 'Home', url: 'index.html' },
        { name: 'About Us', url: 'aboutUs.html' },
        { name: 'Support', url: 'support.html' },
        { name: 'Services', url: 'service.html' },
        { name: 'Contact Us', url: 'contact.html' }
      ];

      // Create the navigation bar
      const navbar = document.getElementById('navbar');
      const nav = document.createElement('nav');
      const ul = document.createElement('ul');

      links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.innerText = link.name;
        li.appendChild(a);
        ul.appendChild(li);
      });

      nav.append(ul);
      navbar.append(nav);
      document.body.append(navbar);
    }
    // Call the function to create the navigation bar
    createNavBar();