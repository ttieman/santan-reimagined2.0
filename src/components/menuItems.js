const menuItems = [
    {
      category: "Breakfast",
      items: [
        {
          name: "Pancakes",
          description: "Three fluffy pancakes served with butter and syrup.",
          image: "https://www.cookingclassy.com/wp-content/uploads/2021/05/pancakes-03.jpg",
          price: 6.99,
        },
        {
          name: "Waffles",
          description: "Three crispy waffles served with butter and syrup.",
          image: "https://imgs.search.brave.com/5C3jgG50Da31Uy-vhqqutDYXY0LAPqkiU93Jv3wCQCA/rs:fit:1200:1200:1/g:ce/aHR0cDovL3VwbG9h/ZC53aWtpbWVkaWEu/b3JnL3dpa2lwZWRp/YS9jb21tb25zLzkv/OTMvV2FmZmxlc193/aXRoX21hcGxlX3N5/cnVwX2FuZF9idXR0/ZXIuanBn",
          price: 6.99,
        },
        {
          name: "Biscuits and Gravy",
          description:
            "Two fresh-baked biscuits topped with our signature sausage gravy.",
            image: "https://imgs.search.brave.com/Z3-RMwemSX5dT8n-CJgZN95eilwHhx2uPqnGb_1MzGA/rs:fit:1200:1067:1/g:ce/aHR0cDovL3JlY2lw/ZXNub2JzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMS8w/NS9iaXNjdWl0cy1h/bmQtc2F1c2FnZS1n/cmF2eS0xLmpwZw",
          price: 4.99,
        },
        {
          name: "Eggs and Bacon",
          description: "Two eggs cooked to order and four slices of crispy bacon.",
          image: "https://imgs.search.brave.com/sBWd7MTAI_Unbnn16iqkZQHdYKWG4MyvPl3hOR6GRcY/rs:fit:1200:1018:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8taVRIZEM3SUYw/c2svVHNRRTdOeUts/M0kvQUFBQUFBQUFD/dzAvUUVIVnppVWFN/TzQvczE2MDAvUGVy/ZmVjdC1CYWNvbi1h/bmQtRWdnc19JTUdf/MDgyMC5KUEc",
          price: 7.99,
        },
      ],
    },
    {
      category: "Lunch",
      items: [
        {
          name: "Hamburger",
          description:
            "A juicy burger topped with lettuce, tomato, onion, and pickles.",
            image: "https://imgs.search.brave.com/jVi_rGpXxmwSp6ZXu9F6We-6carrZaXxBTwHn0eSiA8/rs:fit:600:900:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9qdWlj/eS10YXN0eS1jaGVl/c2VidXJnZXItYmVl/Zi1sZXR0dWNlLXBp/Y2tsZXMtdG9tYXRv/LW9uaW9uLXJpbmdz/LXdvb2Rlbi10YWJs/ZS1jbGFzc2ljLXN0/cmVldC1mb29kLWdy/aWxsZWQtYnVyZ2Vy/LTEzMDQ2NjAyMC5q/cGc",
          price: 8.99,
        },
        {
          name: "Grilled Chicken Sandwich",
          description:
            "A grilled chicken breast topped with lettuce, tomato, and mayo.",
            image: "https://imgs.search.brave.com/p-A-L0QeguszdiMfLLWF40-g5sjl8FG-LIYXBJxydiw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVw/b3N0c3BvcnRzYmFy/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMi8xMC9DaGlj/a2VuLUNsdWItU2Fu/ZHdpY2hfMjAwMC04/NTkyLmpwZw",
          price: 9.99,
        },
        {
          name: "Caesar Salad",
          description:
            "Fresh romaine lettuce, parmesan cheese, and Caesar dressing.",
            image: "https://imgs.search.brave.com/mvQB7PckMcIaQEfAJxDRyFfp-CKs9SnZ7kuuEjEFtAs/rs:fit:387:259:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU4Lzc3/L2NkLzU4NzdjZGNm/MWVmMTkyMmJhNjJm/NjdiNGQ5YWVkYWJh/LmpwZw",
          price: 7.99,
        },
        {
          name: "French Dip",
          description:
            "Thinly-sliced roast beef on a hoagie roll with au jus for dipping.",
            image: "https://imgs.search.brave.com/LA5WDpzL_7wpP429VKWYtLvJjbBM-R1IHFPFeM3ar_Q/rs:fit:1200:630:1/g:ce/aHR0cDovL2Fzc2V0/cy5lcGljdXJpb3Vz/LmNvbS9waG90b3Mv/NTZlMmUyZjNhZTAy/ZjMwZjE0Mjk2MGFm/LzI6MS93XzEyNjAl/MkNoXzYzMC9FbXB0/eU5hbWUtOC0yLmpw/Zw",
          price: 10.99,
        },
      ],
    },
    {
      category: "Sides",
      items: [
        {
          name: "French Fries",
          description: "A basket of crispy golden fries.",
          image: "https://imgs.search.brave.com/6h4YjEllnKEfxTFOzHwMPwwystsfELrEw35916h3IW0/rs:fit:800:533:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jcmlz/cHktdGFzdHktZnJl/bmNoLWZyaWVzLWJh/c2tldC1jcmlzcHkt/dGFzdHktc2Vhc29u/ZWQtZnJlbmNoLWZy/aWVzLWJhc2tldC0x/MzE1MDM4MDcuanBn",
          price: 2.99,
        },
        {
          name: "Onion Rings",
          description: "A basket of crispy breaded onion rings.",
          image: "https://imgs.search.brave.com/KfCFcdVwqarssNoF1u3VUPzBKJFdxiWgCoJWfuq7E9Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9idXJn/ZXJiaXRlcy5iZS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/My9vbmlvbi1yaW5n/cy0yMDQ4eDEzNjcu/anBn",
          price: 4.99,
        },
        {
          name: "Side Salad",
          description: "A small salad with mixed greens and your choice of dressing.",
          image: "https://imgs.search.brave.com/CmG3ue08I8-0sGMWPnhtO8KpAfYPhNAWLZv2FwlJXh8/rs:fit:800:549:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tM1ZwemQtaFps/S1kvWHh6Rm5ORHR2/OUkvQUFBQUFBQUFT/Z1kvTGlnVTJoTHpE/TFEwMkJZT21LMTFN/RGZSclVVbWJRTmlB/Q0xjQkdBc1lIUS9z/MTYwMC9NaXhlZF9H/cmVlbl9IZXJiX1Nh/bGFkLnBuZw",
          price: 3.99,
        },
        {
          name: "Mashed Potatoes",
          description: "Creamy mashed potatoes with gravy.",
          image: "https://imgs.search.brave.com/1356_5SdWcf8TT1gRsFe4FsCDzq1bQjdHMXVXViR0LU/rs:fit:1024:738:1/g:ce/aHR0cHM6Ly93d3cu/b25jZXVwb25hY2hl/Zi5jb20vaW1hZ2Vz/LzIwMTcvMTEvbWFr/ZS1haGVhZC1tYXNo/ZWQtcG90YXRvZXNf/LTEwMjR4NzM4Lmpw/Zw",
          price: 2.99,
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          name: "Soda",
          description: "Your choice of Coke, Pepsi, or Sprite.",
          image: "https://imgs.search.brave.com/r-KZyopP94QoftjwKhy8wsli3jLFYSiM0oNIOjGBP9c/rs:fit:1200:1101:1/g:ce/aHR0cHM6Ly93d3cu/dG9kYXlpZm91bmRv/dXQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzEyL3Nv/ZGEucG5n",
          price: 1.99,
        },
        {
          name: "Iced Tea",
          description: "Fresh-brewed iced tea with lemon.",
          image: "https://imgs.search.brave.com/lvSUIhqYzg9aP_x3ptxqvJMhn1Ps3ohZa61oiU1Zf7Y/rs:fit:683:1024:1/g:ce/aHR0cHM6Ly93d3cu/c3dlZXRzdGVlcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDIvbGVtb24t/aWNlZC10ZWEtMjAt/NjgzeDEwMjQuanBn",
          price: 1.99,
        },
        {
          name: "Coffee",
          description: "A bottomless cup of hot coffee.",
          image: "https://imgs.search.brave.com/QKiao-5eBlLwgo4qqdinITkYHQeJtq8ConLmIa7IpI8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nb29k/c3RvY2sucGhvdG9z/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9jb2Zm/ZWUtcG90LXBvdXJp/bmctbXVnLmpwZw",
          price: 1.99,
        },
        {
          name: "Milkshake",
          description: "A creamy milkshake in your choice of flavor.",
          image: "https://imgs.search.brave.com/ny4Xw_Bd1DCXGJinbhime_YAHe4luQNTULbnXzylM7E/rs:fit:680:989:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC82Ny9kZC8wNy82/N2RkMDdhNThiOTk2/MTcyOTI3ZjU1MWFk/MGU5MTNkZC0tY2hv/Y29sYXRlLW1pbGtz/aGFrZS1yZWNpcGVz/LXdoaXBwZWQtY3Jl/YW0tcmVjaXBlcy5q/cGc",
          price: 3.99,
        },
      ],
    },
  ];
  
  export default menuItems;
  