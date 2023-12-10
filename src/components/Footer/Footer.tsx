const SITE_NAME = process.env.REACT_APP_SITE_NAME

const Footer: React.FC = () => {
    return (
        <footer className='bg-dark footer mt-auto py-3 text-center'>
            <div className='container'>
                <small className='text-light'>
                    © {SITE_NAME} | Made with &hearts; with <a href='https://react.dev/'>React</a>
                </small>
            </div>
        </footer>
    )
}

export default Footer
