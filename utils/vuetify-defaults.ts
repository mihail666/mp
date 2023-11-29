import { type DefaultsInstance } from 'vuetify/lib/framework.mjs'

export const defaults: DefaultsInstance = {
  VAppBar: {
    elevation: 10,
  },
  VTextField: {
    color: 'primary',
    variant: 'outlined',
    density: 'comfortable',
  },
  VCard: {
    elevation: 3,
  },
  VNavigationDrawer: {
    permanent: true,
    location: "right",
    floating: true
  } 
}
