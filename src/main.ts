const tg = window.Telegram.WebApp;
tg.expand();

const userName = tg.initDataUnsafe.user.first_name;
const userId = tg.initDataUnsafe.user.id;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>    
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <p>${userId}</p>
      <p>${userName}</p>
    </div>
  </div>
`
