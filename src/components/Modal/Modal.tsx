// React
import { useEffect } from 'react'

// Types
import { ModalProps } from './Modal.types'

// Styles
import styles from './Modal.module.scss'
import { useKey } from '../../hooks/useKey'

// Constants
const SITE_NAME = process.env.REACT_APP_SITE_NAME as string

// Component
const Modal: React.FC<ModalProps> = ({
    isOpen = true,
    onClose,
    title,
    children,
}) => {
    // Effects
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

	useKey('Escape', onClose)

	useEffect(() => {
        document.title = title
        return () => {
            document.title = SITE_NAME
        }
    }, [title])


    // JSX
    if (!isOpen) return null
    return (
      <div className={styles['c-modal']}>
        <div className={`${styles.content} rounded border`}>
            <span className={`${styles.close} float-end`} onClick={onClose}>&times;</span>
            <h2>{title}</h2>
            <hr className='mb-4' />
            {children}
            <div className='mt-4 text-center'>
                <button
                    className='btn btn-dark'
                    onClick={onClose}
                >
                    <i className="bi bi-x"></i> Close movie details
                </button>
            </div>
        </div>
      </div>
    )
}

export default Modal
  