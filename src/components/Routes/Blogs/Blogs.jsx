import React from 'react';
import NavBanner from '../../NavBanner/NavBanner';

const Blogs = () => {
    return (
        <>
            <NavBanner />

            <h2 className='text-[#1A1919] text-2xl font-bold text-center my-9 -mt-2 pb-12 relative z-20'>Welcome to my blog page!!!</h2>

            <section className='px-1 md:px-5 lg:px-40'>
                <article className=''>
                    <h2 className='text-xl font-bold text-pink-500'>1. When should you use context API?</h2>
                    <p><b>#Context API: </b>
                        If same data needs to be loaded in multiple components, instead of loading the data repeatedly, the data can be shared through the context provider by loading the data once in the main(root) component. UseContext() hook is used to get that data from the child component.
                        <br />
                        #Avoid prop drilling: To send any data to a child component, the parent component sends the child component then its child component as follows. Sending data like this is called prop drilling. To avoid prop drilling, the context can be used.
                        <br />
                        We can pass any valid JS code like array, object, string, number, etc as value. And we can put any data in the state and send that state to child component.
                    </p>
                </article>
                <article className='my-6'>
                    <h2 className='text-xl font-bold text-pink-500'>2. What is a custom hook?</h2>
                    <p><b>#Custom hook: </b>
                        A custom hook is a JavaScript function whose name starts with "use" and can call another hook. If any component code needs to be re-used another component, then, the code can be received with a custom hook.
                    </p>
                </article>
                <article className=''>
                    <h2 className='text-xl font-bold text-pink-500'>3. What is useRef?</h2>
                    <p><b>#useRef(): </b>
                        useRef() is a React Hook and also a function. useRef give a value that's not needed for rendering. Any JS code can be given as initial value. useRef hook returns an object. The returns objects inside a single property.
                    </p>
                </article>
                <article className='my-6'>
                    <h2 className='text-xl font-bold text-pink-500'>4. What is useMemo?</h2>
                    <p><b>#useMemo(): </b>
                        useMemo() is a React Hook and function. useMemo hook is used for calculations. useMemo take two parameters. The 1st param is a function and the 2nd param is dependency. The function is only called when the dependencies change. If the dependencies do not change between renders, useMemo() returns the previously cached result.
                    </p>
                </article>
            </section>
        </>
    );
};

export default Blogs;