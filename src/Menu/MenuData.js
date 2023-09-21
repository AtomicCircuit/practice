export const menuData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Forms',
      path: '/forms',
      children: [
        {
          label: 'Seperate State',
          path: '/Forms/FormWithSeperateState',
        },
        {
          label: 'Single Object State',
          path: '/Forms/FormWithSingleObjectState',
        },
        {
          label: 'Bool',
          path: '/Forms/FormWithBool',
        },
      ],
    },
    {
      label: 'Parent to Child Data',
      path: '/ParentComponent',
    },
    {
      label: 'Algo',
      path: '/algo',
      children: [
        {
          label: 'Seperate State',
          path: '/algo/ReverseString',
        },
      ],
    },
    // Add more menu items as needed
  ];
  