import { Formik, Form, Field, ErrorMessage } from "formik"; //? ESTADO DEL FORMULARIO, CREA FORMULARIOS, CREA INPUTS
import { UseHook } from "../context/atomCtx";
import { useNavigate, useParams, Link } from "react-router-dom"; //? params PARA SOLICITAR DATOS DEL BACK
import  * as Yup  from "yup"; //? NO SE CENTRA SOLO EN UNA FUNCION SINO EN TODO. USADO EN W002
import { useEffect, useState } from "react"; //? useState PARA FORZAR LA UPDATE DEL ATOMO
                              //? EN OBJ Q REACCIONAN A EVENTOS, (max,min,long,email)

export function AtomFmXD() {
  const {addXYZ, getX, updateX} = UseHook() //! ME MOSTRARA LOS DATOS
  const navegante  = useNavigate()
  const bringen = useParams() //? traer DEL ALEMAN
  // console.log(bringen)
  const [quark, setQuark] = useState({
    tt: '',
    des: '',
    // imgXD: null
    mtzIMG: null  //!IMP REF: 0012
  });  //? NUEVO ESTADO GLOBAL

  //! ESTE useEffect RELLENARA EL ESTADO CREADO hadronST
  //! DETALLE NO MENOR, NO PODEMOS UTILIZAR UN await/ sync ASI NADA MAS DENTRO DEL useEffect()
  //! POR ELLO CRAREMOS UNA FUNCION ANONIMA
  useEffect(() => { //? COMPRUBA SI EXISTE UN PARAMETRO
    (async () => {
      if (bringen.id) { //? SI EXISTE EL PARAMETRO id

        //AQUI PEDIREMOS DATOS AL BACKEND      
        const quark = await getX(bringen.id);  //? LLAMA ESA FUNCION Y LE PASA ESE id  //1 res, 2 data, 3 hadronST
        setQuark(quark);
      }
    })();
  }, [bringen.id]);

  return (
    <div>
      <h1>formulario</h1>
      <header>
        <h3>nuevo atomo</h3>
        <Link to='/'>go back</Link>
      </header>

      <Formik
      //TODO ***************************************************************** PROP
        // initialValues={{  //DEFINE EL ESTADO INICIAL
        //   tt: '',
        //   des:''
        // }}        
        initialValues={quark} //?   EN VEZ DE DEFINIRLO LO IMPORTAMOS
        //TODO ***************************************************************** PROP
          //** W002
        validationSchema={Yup.object({
          tt: Yup.string().required('titulo requerido'),
          des: Yup.string().required('des es required')
        })}


        //TODO ***************************************************************** PROP
        onSubmit={ async (values, actions) => {
          //! ENVIAR ATRAVES DE UN CONTEXTO PARA GUARDARLO EN EL BACK
          // console.log(values)
          if (bringen.id) {
            await updateX(bringen.id, values);
          } else {
            await addXYZ(values);        //?UNA VEZ GUARDADO...
          }

          //!CUANDO SE CREA YA ESTA EN TRUE, para ver el estado del formulario
          actions.setSubmitting(false);
          navegante('/');        //?ENVIAME A LA HOME...
          
        }} 
        enableReinitialize
        //LA FUNCION RECIBIRA...
      >
        {({handleSubmit, setFieldValue, isSubmitting}) => (  //! EJECUCION DE FUNCION MAIN {({...})}, PARA ESTRUCTURAR
                                        // VALIDADOR
        //* NECESARIO PARA MANEJAR EL ENVIO + LA FUNCION QUE NOS APORTA EL "FRAME"
          <Form onSubmit={handleSubmit}> 
          
          {/* <Field name='fmtt' placeholder='titulo'></Field>
          <Field name='fmdes' placeholder='descripcion'></Field> */}

          {/* //? ================================================================ TITULO */}
          <label htmlFor="tt" className="block">titulo</label>
          <Field 
            name='tt' 
            placeholder='titulo' 
            className='px-3 py-2 focus:outline-none rounded bg-gray-600 text white w-full'>
          </Field>  
          <ErrorMessage 
            component='p' 
            name="tt"
            className="text-red-400 text-sm">
          </ErrorMessage> 
          {/* DE FORMIK MOD */}

          {/* //? ================================================================ DESCRIPCION */}
          <label htmlFor="des" className="block">descripcion</label>
          <Field 
            component='textarea'  //! COMPONENTE MAS EXTENSO DEL TIPO textarea
            name='des' 
            placeholder='descripcion'
            className='px-3 py-2 focus:outline-none rounded bg-gray-600 text white w-full'>
          </Field>
          <ErrorMessage 
            component='p' 
            name="des"
            className="text-red-400 text-sm">

          </ErrorMessage>

          {/* //? ================================================================ IMAGEN */}
          <label  
            htmlFor="

          ">subir imagen            
          </label>

          <input 
            type="file" 
            name="mtzIMG" //!IMP REF: 0012
            // onChange={(e) => console.log(e.target.files)}
            // onChange={(e) => setFieldValue('imgXD',e.target.files[0])}
            onChange={(e) => setFieldValue('mtzIMG',e.target.files[0])}
            //!IMP REF: 0012
            
          />

          <button type="submit" className="bg-purple-200"
          disabled={isSubmitting}
          >
            {isSubmitting ? 'cargando' : 'guardado'}  
          </button>
          
        </Form>
        )}
      </Formik>

    </div>
  )
}

//!! EL OBJETIVO DELEGAR LA EXPORTACION DE FUNCIONES Y PARAMETROS  A , view/index.js 
//!! Y NO FICHERO POR SEPARADO
// export default home 