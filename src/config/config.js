export const registerFormControls = [
  {
    name: "name",
    label: "User Name",
    placeholder: "Enter your name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter password",
    componentType: "input",
    type: "password",
  },
];
export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter password",
    componentType: "input",
    type: "password",
  },
];
export const addProductFormElements = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter product title",
    componentType: "input",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter product description",
    componentType: "textarea",
  },
  {
    name: "price",
    label: "Price",
    placeholder: "Enter product price",
    componentType: "input",
    type: "number",
  },
  {
    name: "salePrice",
    label: " Sale Price",
    placeholder: "Enter sale price(optional)",
    componentType: "input",
    type: "number",
  },
  {
    name: "category",
    label: "Category",
    placeholder: "Select category",
    componentType: "select",
    options: [
      { id: "electronics", label: "Electronics" },
      { id: "fashion", label: "Fashion" },
      { id: "home", label: "Home & Furniture" },
      { id: "beauty", label: "Beauty & Personal Care" },
      { id: "sports", label: "Sports & Outdoors" },
    ],
  },
  {
    name: "brand",
    label: "Brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi" },
    ],
  },
  {
    name: "stock",
    label: "Stock",
    placeholder: "Enter stock quantity",
    componentType: "input",
    type: "number",
  },
];
export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/list",
  },
  {
    id: "electronics",
    label: "Electronics",
    path: "/shop/list",
  },
  {
    id: "fashion",
    label: "Fashion",
    path: "/shop/list",
  },
  {
    id: "beauty",
    label: "Beauty",
    path: "/shop/list",
  },
  {
    id: "sports",
    label: "Sports",
    path: "/shop/list",
  },
];
export const categoryOptionsMap = {
  electronics: "Electronics",
  fashion: "Fashion",
  home: "Home & Furniture",
  beauty: "Beauty & Personal Care",
  sports: "Sports & Outdoors",
};
export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
};
export const filterOptions = {
  category: [
    { id: "electronics", label: "Electronics" },
    { id: "fashion", label: "Fashion" },
    { id: "home", label: "Home & Furniture" },
    { id: "beauty", label: "Beauty & Personal Care" },
    { id: "sports", label: "Sports & Outdoors" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi" },
  ],
};
export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "123 Main Street",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "e.g. Perth",
  },
  {
    label: "Postal Code",
    name: "postCode",
    componentType: "input",
    type: "text",
    placeholder: "e.g. 6001",
  },
  {
    label: "Phone Number",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "+1 123-456-7890",
  },
  {
    label: "Additional Notes",
    name: "notes",
    type: "textarea",
    placeholder: "Any delivery instructions or extra info...",
  },
];
