
let danhsachsanpham = [
    {
        name: "Sản Phẩm 1",
        price: 10000,
        rating: 4,
        photo: "./Photo/1.jpeg",
    },

    {
        name: "Sản Phẩm 2",
        price: 20000,
        rating: 4,
        photo: "./Photo/1.jpeg",

    },
    {
        name: "Sản Phẩm 3",
        price: 30000,
        rating: 5,
        photo: "./Photo/1.jpeg",
    },
    {
        name: "Sản Phẩm 4",
        price: 30000,
        rating: 5,
        photo: "./Photo/1.jpeg",
    },
    {
        name: "Sản Phẩm 5",
        price: 30000,
        rating: 5,
        photo: "./Photo/1.jpeg",

    },
    {
        name: "Sản Phẩm 6",
        price: 30000,
        rating: 5,
        photo: "./Photo/1.jpeg",

    },
    {
        name: "Sản Phẩm 7",
        price: 30000,
        rating: 5,
        photo: "./Photo/1.jpeg",

    },
    {
        name: "Sản Phẩm 8",
        price: 30000,
        rating: 5,
        photo: "./Photo/1.jpeg",

    }
]
function add(name, price, rating, photo) {
    document.getElementById("container").innerHTML += `
    
    <div class="product">
    <img class='photo' src=`+photo+`>
    <div> `+name+` </div>
    <div> Giá `+price+`</div>
    </div>`
}
for (let sanpham of danhsachsanpham) {
    add(sanpham.name,sanpham.price,sanpham.rating, sanpham.photo)
}
