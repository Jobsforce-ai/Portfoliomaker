import { motion } from 'framer-motion';
import { profileData } from '@/utils/SamplePortfolioData';

const PersonalInfo = () => {
    const skills = profileData.skills || ['React', 'React Native', 'Angular', 'Figma', 'Adobe XD', 'MongoDB'];

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col items-center">
                    <motion.div
                        className="w-32 h-32 rounded-full overflow-hidden mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.h2
                        className="text-4xl font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {profileData.profile?.firstName}
                    </motion.h2>

                    <motion.h2
                        className="inline-block px-4 py-1 border border-gray-500 rounded-full mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {profileData.profile?.headline || "Full Stack Dev"}
                    </motion.h2>

                    <motion.p
                        className="text-center text-gray-300 mb-8 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {profileData.profile?.summary ||
                            "Hi, I'm John Doe, a front-end developer with a passion for crafting user-friendly and visually appealing web applications. I specialize in HTML, CSS, JavaScript, React, Angular, etc. and enjoy translating design concepts into functional and engaging user interfaces."}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-3 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="flex gap-3"
                            style={{
                                display: 'inline-flex',
                                animation: 'scroll 10s linear infinite',
                            }}
                        >
                            {skills.concat(skills).map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="px-4 py-2 bg-[#222222] rounded-full text-sm text-nowrap"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                    <style>{`
                        @keyframes scroll {
                            0% {
                                transform: translateX(100%);
                            }
                            100% {
                                transform: translateX(-100%);
                            }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default PersonalInfo;