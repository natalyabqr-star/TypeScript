import { z } from 'zod'

const userSchema =z.object({
    name: z.string().min(3, { message: 'O nome precisa de 3 caracteres.'})
    .transform(name => name .toLocaleUpperCase()),//Converte tudo oque está em minusculo para maiuscúlo
    age: z.number().min(18, { message: 'Você precisa ser maior de idade'})
})

type User = z.infer<typeof userSchema>

function saveUserToDatebase(user: User)  {
    const { name, age } = userSchema.parse(user)
         

console.log( name, age)

}

saveUserToDatebase({
    name: 'maria',
    age: 20
})
