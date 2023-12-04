import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dishes',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Dish discription',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price of the dish',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    }),
  ],
})
