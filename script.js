const pages = [
    {
      title: "I'm Really Sorry 😔",
      message: "I never meant to hurt you...",
      emoji: "🥺"
    },
    {
      title: "Please Forgive Me 💔",
      message: "You're too special to lose 💕",
      emoji: "😞"
    },
    {
      title: "I Miss You 😢",
      message: "Every second without you feels empty...",
      emoji: "😓"
    },
    {
      title: "Let's Be Happy Again 🌈",
      message: "I promise to make it right 💖",
      emoji: "😊"
    }
  ];
  
  let currentPage = 0;
  
  const title = document.getElementById("title");
  const message = document.getElementById("message");
  const emoji = document.getElementById("emoji");
  const nextBtn = document.getElementById("nextBtn");
  const forgiveBtn = document.getElementById("forgiveBtn");
  
  function updatePage() {
    const page = pages[currentPage];
    title.textContent = page.title;
    message.textContent = page.message;
    emoji.textContent = page.emoji;
  
    // Show forgive button on last page
    if (currentPage === pages.length - 1) {
      forgiveBtn.classList.remove("hide");
    } else {
      forgiveBtn.classList.add("hide");
    }
  }
  
  nextBtn.addEventListener("click", () => {
    currentPage = (currentPage + 1) % pages.length;
    updatePage();
  });
  
  forgiveBtn.addEventListener("click", () => {
    document.getElementById("page").innerHTML = `
      <h1>Yay! You Forgave Me 💖</h1>
      <p>I promise to be better and love you even more 💑</p>
      <div id="emoji">🥰</div>
    `;
  });
  
  updatePage(); // Initial load
  