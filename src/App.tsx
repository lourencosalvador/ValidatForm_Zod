import './App.css'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
const schema = z.object({
  name: z.string().min(3, 'Por Favor, informe um nome válido')
  .refine((name) => name === 'lore', {
    message: 'Nome invalido'
  }) 
})

schema.parse({
  name: 'lore'
})

  type DateForm = z.infer<typeof schema>
function App() {
    const {handleSubmit, register, formState: {errors}} = useForm({
      mode: 'all',
      criteriaMode: 'all',
      resolver: zodResolver(schema),
      defaultValues: {
        name: ''
      }
    })

    const handleSubmitForm = (data: DateForm) => {
      console.log(data)
    }
  return (
    <>
      <div className='form'>
        <h2>Form</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
     <input 
     {...register('name')}
     placeholder='digite o seu nome'
     type="text" />
     {errors.name && <p className='p'>{errors.name.message}</p>}
     <button>enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
