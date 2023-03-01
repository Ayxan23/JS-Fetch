let table = document.querySelector(".table");
let check = false;
let i = 0;

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then((data) => data.json())
  .then((res) =>
    res.map((obj) => {
      table.innerHTML += `<tr>
      <td class = "td${i}">${obj.albumId}</td>
      <td class = "td${i}">${obj.id}</td>
      <td class = "td${i}">${obj.title}</td>
      <td class = "td${i}">${obj.url}</td>
      <td class = "td${i}">${obj.thumbnailUrl}</td>
      </tr>`;

      let tdArr = document.querySelectorAll(`.td${i}`);
      i++;

      tdArr.forEach((td) => {
        check
          ? (td.style.backgroundColor = "#ececec")
          : (td.style.backgroundColor = "#fff");
      });
      check ? (check = false) : (check = true);
    })
  );
