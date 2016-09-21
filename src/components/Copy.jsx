import React, { Component } from 'react';

import Section from './Section.jsx';

class Copy extends Component {
    render() {
        return (
            <div className="copy gutter-small">
                <div className="grid-centered-noGutter pv2">
                    <div className="col-9_xs-12">
                        <Section {...{
                            heading: 'Superposition'
                        }}>
                            <p>
                                {"Quantum superposition is a fundamental principle of quantum mechanics. \
                                It states that, much like waves in classical physics, any two (or more) quantum \
                                states can be added together and the result will be another valid \
                                quantum state; and conversely, that every quantum state can be represented as a sum \
                                of two or more other distinct states."}
                            </p>
                        </Section>

                        <Section {...{
                            heading: 'Tunnelling'
                        }}>
                            <p>
                                {"Quantum tunnelling refers to the quantum mechanical phenomenon where a particle tunnels \
                                through a barrier that it classically could not surmount. This plays an essential role in \
                                several physical phenomena, such as the nuclear fusion that occurs in main sequence stars like the Sun. \
                                It has important applications to modern devices such as the tunnel diode, quantum computing, and the \
                                scanning tunnelling microscope. The effect was predicted in the early 20th century and its acceptance as a \
                                general physical phenomenon came mid-century."}
                            </p>
                        </Section>

                        <Section {...{
                            heading: 'Entanglement'
                        }}>
                            <div className="grid">
                                <div className="col-6_xs-12">
                                    <p>
                                        {"Quantum entanglement is a physical phenomenon that occurs when pairs or groups of particles \
                                        are generated or interact in ways such that the quantum state of each particle cannot be described \
                                        independently of the others, even when the particles are separated by a large distance – instead, \
                                        a quantum state must be described for the system as a whole."}
                                    </p>
                                </div>
                                <div className="col-6_xs-12">
                                    <p>
                                        {"Measurements of physical properties such as position, momentum, spin, and polarization, performed \
                                        on entangled particles are found to be appropriately correlated."}
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        {" For example, if a pair of particles \
                                        are generated in such a way that their total spin is known to be zero, and one particle is found to \
                                        have clockwise spin on a certain axis, the spin of the other particle, measured on the same axis, will\
                                         be found to be counterclockwise, as to be expected due to their entanglement."}
                                    </p>
                                </div>
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Copy;
