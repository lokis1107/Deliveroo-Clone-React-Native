import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Discription of the restaurant',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Restaurant Image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating of the Restaurant',
      type: 'number',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please enter the value between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (rule) => rule.required(),
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dishes'}]}],
    }),
  ],
})
