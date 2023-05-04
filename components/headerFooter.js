const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

async function getHeader() {
    const response = await fetch('../header.html');
    const html = await response.text();
    header.innerHTML = html;
  }

  async function getFooter() {
    const response = await fetch('../footer.html');
    const html = await response.text();
    footer.innerHTML = html;
  }

  
  getHeader();
  getFooter();