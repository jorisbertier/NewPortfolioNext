import React, { useState } from 'react'
import Futur from '../../../public/assets/project/future.png'
// import Entract from '../../../public/assets/project/entracte1.png'
// import Explore from '../../../public/assets/calendarAPI1.png'
import {Logos} from '../utils/LogoDatas'
import Project from '../components/Project'
import { AnimatePresence, motion } from 'framer-motion'


import Modal from '../components/Modal'

// const defaultFontFamilyTitle = css`
//     font-family: Inter, sans-serif; /* Vous pouvez remplacer 'Arial' par votre police de caractères par défaut */
// `;

// const Subtitle = styled.h2 `
//     ${defaultFontFamilyTitle}
//     text-transform: uppercase;
//     font-size: 4em;
//     font-weight: 700;
// `

// const WrapperProjects = styled.div `
//     color: white;
//     height: 100vh;
// `

// const WrapperProject = styled.div `
//     // align-items: stretch;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     transition: .25s;
//     width: 100%;
// `

// const ButtonLoad = styled.button `

//     display: inline-block;
//     padding: 10px 20px;
//     font-size: 16px;
//     font-weight: bold;
//     text-align: center;
//     text-decoration: none;
//     border: 2px solid #007bff;
//     color: #007bff;
//     background-color: transparent;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     box-shadow: 8px 6px 0 2px #1d1e30;

//     &:hover {
//         background-color: #007bff; /* Couleur de fond au survol */
//         color: #fff; /* Couleur du texte au survol */
//     }
// `



export default function ProjectsSection() {

    const [addProject, setAddProject] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const close= () => setModalOpen(false)
    const open= () => setModalOpen(true)

  
  return (
    <div className='text-textprimary h-screen w-screen max-w-full overflow-x-hidden bg-red-300'>
        {/* <Subtitle>{`< Projects />`}</Subtitle> */}
        <div className=" flex flex-wrap w-full max-w-full items-stretch justify-evenly duration-0.25"> 

            <Project
                title="NFT Marketplace"
                alt="logo symfony"
                description="Future est une plateforme combinant cryptomonnaies et NFTs qui offre aux utilisateurs la possibilité de découvrir, acheter, créer et suivre la valeur des NFTs."
                src={'/assets/project/future.png'}
                stack1={Logos.SymfonyLight}
                stack2={Logos.BootstrapLight}
                stack3={Logos.AngularLight}
                onClick={() => modalOpen ? close() : open()}
            />

            <Project
            title="Entracte"
            alt="Site de bière Entracte"
            description="Entracte est un site vitrine d'une brasserie et bar en ligne. Le site à pour objectif de présenter la brasserie ainsi que les bières artisanales qui sont proposés par le commerçant."
            src={'/assets/project/entracte1.png'}
            stack1={Logos.JsLight}
            stack2={Logos.SassLight}
            onClick={() => modalOpen ? close() : open()}
            />

            <Project
            title="Explore Calendar"
            alt="Calendrier prise de rendez-vous"
            description="Explore est une application qui permet la mutualisation de prise de rende-vous en fonction des créneaux de disponibilités du collaborateur. L'application est connecté à l'API Google Calendar afin de synchroniser les données. (Non disponible - Projet confidientiel)"
            src={'/assets/project/calendarAPI1.png'}
            stack1={Logos.SymfonyLight}
            stack2={Logos.JqueryLight}
            stack3={Logos.ApiLight}
            stack4={Logos.GoogleLight}
            onClick={() => modalOpen ? close() : open()}
            />

      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
        </div>
        <br/><br/>
        {/* <div className='z-30'>
        <motion.button whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => modalOpen ? close() : open()} className='bg-green-500'>Launch modal</motion.button>
      </div> */}
    {/* <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>

    </AnimatePresence> */}
        {/* {addProject ?
        (
        <>
            <WrapperProject>
                <Project
                title="Explore Calendar"
                alt="Calendrier prise de rendez-vous"
                description="Explore est une application qui permet la mutualisation de prise de rende-vous en fonction des créneaux de disponibilités du collaborateur. L'application est connecté à l'API Google Calendar afin de synchroniser les données. (Projet confidientiel)"
                src={Explore}
                /><br/>
            <div><ButtonLoad onClick={() => setAddProject(false)}>Load close</ButtonLoad></div>
            </WrapperProject>
        </>
        ): (
        <div><ButtonLoad onClick={() => setAddProject(true)}>Load more</ButtonLoad></div>
        )} */}
    </div>
  )
}
