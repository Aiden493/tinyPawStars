async function loadFacebookPosts() {
    const PAGE_ID = "YOUR_PAGE_ID";
    const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

    const url = `https://graph.facebook.com/v17.0/${PAGE_ID}/posts?fields=message,created_time,full_picture,permalink_url&access_token=${ACCESS_TOKEN}`;

    const res = await fetch(url);
    const data = await res.json();

    const container = document.getElementById("fb-posts");

    data.data.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <h3>${post.message || "No text"}</h3>
            ${post.full_picture ? `<img src="${post.full_picture}" />` : ""}
            <a href="${post.permalink_url}" target="_blank">View on Facebook</a>
            <hr>
        `;

        container.appendChild(div);
    });
}
loadFacebookPosts();
