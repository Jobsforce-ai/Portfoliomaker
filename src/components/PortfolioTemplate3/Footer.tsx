import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <>
            <footer className="py-1 px-4 bg-[#0c0c0c]">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <motion.p
                            className="text-gray-400 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            © {new Date().getFullYear()} John Doe. All rights reserved.
                        </motion.p>

                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                        </motion.div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;