import Hero from './hero'


const Index = () => {

    const components = [
        { id: "hero", component: <Hero /> },

    ]

    return (
        <>
            {
                components.map((component) => {
                    return (
                        <div key={component.id}>
                            {component.component}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Index
