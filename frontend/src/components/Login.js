import { Tabs } from 'flowbite-react';

function Login() {
  return (
    <section className='w-full'>
        <Tabs>
            <Tabs.Item active title="Login">
                This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
            <Tabs.Item title="Register">
                This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
        </Tabs>
        
    </section>
  )
}

export default Login