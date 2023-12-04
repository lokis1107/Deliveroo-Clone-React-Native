import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Featured description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'restaurant',
      title: 'Featured Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
