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
