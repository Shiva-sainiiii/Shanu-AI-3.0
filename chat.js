const chatBox = document.getElementById("chat");
const input = document.getElementById("inputBox");
const sendBtn = document.getElementById("sendBtn");

function addMessage(msg, type) {
  const div = document.createElement("div");
  div.className = `msg ${type}`;
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const userMsg = input.value.trim();
  if (!userMsg) return;

  addMessage(userMsg, "user");
  input.value = "";

  const loading = document.createElement("div");
  loading.className = "msg bot";
  loading.textContent = "Typing...";
  chatBox.appendChild(loading);

  const res = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: userMsg })
  });

  const data = await res.json();
  loading.remove();
  addMessage(data.reply, "bot");
}

sendBtn.onclick = sendMessage;
input.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });ge(data.reply, "bot");
}

sendBtn.onclick = sendMessage;
input.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });