// src/components/project/ProjectTimeline.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectTimeline({ timeline, containerRef }) {
    if (!timeline || !containerRef) return null;

    const { start, end, events = [] } = timeline;

    // Scroll progress of project section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Reveal animation
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.1], [-6, 0]);

    // Progress bar width
    const progressWidth = useTransform(
        scrollYProgress,
        [0.1, 1],
        ["0%", "100%"]
    );

    return (
        <motion.div
            className="project-timeline-wrapper "
            style={{ opacity, y: translateY }}
        >
            <div className="project-timeline backdrop-blur-md rounded-full">
                {/* Base line */}
                <div className="timeline-line" />

                {/* Animated progress line */}
                <motion.div
                    className="timeline-progress"
                    style={{ width: progressWidth }}
                />

                {/* Start label */}
                <span className="timeline-label timeline-start">{start}</span>

                {/* Milestone dots */}
                {events.length > 0 && (
                    <div className="timeline-dots">
                        {events.map((event, idx) => {
                            const progressPoint = (idx + 1) / (events.length + 1);

                            const dotColor = useTransform(
                                scrollYProgress,
                                [progressPoint - 0.01, progressPoint],
                                ["#d1d5db", "#4FA3A5"]
                            );

                            return (
                                <motion.div
                                    key={idx}
                                    className="timeline-dot-wrapper"
                                >
                                    <motion.span
                                        className="timeline-dot"
                                        style={{ backgroundColor: dotColor }}
                                    />

                                    {/* Tooltip */}
                                    <span className="timeline-tooltip">
                                        <strong>{event.label}</strong>
                                        <br />
                                        <span>{event.date}</span>
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                )}


                {/* End label */}
                <span className="timeline-label timeline-end">{end}</span>
            </div>
        </motion.div>
    );
}
