import { v4 as uuid } from 'uuid'
import faker from 'faker'

faker.seed(123)

export const notes = [
  { id: uuid(), title: faker.name.title(), content: faker.lorem.words(40), category: 'Home' },
  { id: uuid(), title: faker.name.title(), content: faker.lorem.words(25), category: 'School' },
  { id: uuid(), title: faker.name.title(), content: faker.lorem.words(37), category: 'Work' },
]
