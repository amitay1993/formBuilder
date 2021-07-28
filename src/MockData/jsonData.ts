export const options = [
  {
    type: "row",
    children: [
      {
        type: "col",
        children: [
          {
            label: "User Name",
            type: "text",
            attributes: {
              id: "username",
              name: "username",
              required: true,
              min: 4,
              max: 64,
            },
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            label: "Email verification",
            type: "email",
            attributes: {
              id: "email-verify",
              name: "email-verify",
              required: true,
              min: 4,
              max: 64,
            },
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            label: "text",
            type: "text",
            attributes: {
              required: true,
              id: "text",
              name: "firstname",
            },
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            label: "Email",
            type: "email",
            attributes: {
              required: true,
              id: "email",
              name: "email",
              min: 4,
              max: 128,
            },
          },
        ],
      },
    ],
  },
  {
    type: "row",
    children: [
      {
        type: "col",
        children: [
          {
            label: "password",
            type: "password",
            attributes: {
              name: "Password",
              id: "password",
              required: true,
              min: 4,
              max: 10,
            },
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            label: "age",
            type: "number",
            attributes: {
              id: "age",
              name: "age",
              value: 3,
              required: true,
              min: 4,
              max: 10,
            },
          },
        ],
      },
    ],
  },
  {
    type: "row",
    children: [
      {
        type: "col-4",
        children: [
          {
            label: "cars",
            type: "select",
            attributes: {
              name: "cars",
              id: "cars",
              options: ["volvo", "suzuki", "citroen", "mazda"],
            },
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            label: "Male",
            type: "radio",
            attributes: {
              name: "gender",
              id: "male",
            },
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            label: "Female",
            type: "radio",
            attributes: {
              name: "gender",
              id: "female",
            },
          },
        ],
      },
    ],
  },
  {
    type: "row",
    children: [
      {
        type: "col",
        children: [
          {
            label: "Review",
            type: "textarea",
            attributes: {
              rows: 6,
              cols: 10,
              id: "review",
              name: "review",
            },
          },
        ],
      },
    ],
  },
];
