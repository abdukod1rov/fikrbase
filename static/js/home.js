// Store content sections
    const sections = {
        "whoami": `
                <div class="section visible" id="intro">
                    <p>Hello, I'm <span style="font-weight: bold;">Samandar Abdukodirov</span> - a passionate Backend Engineer with expertise in building robust, scalable services and APIs.</p>
                    <div class="loading">Loading personal profile...</div>
                    <progress max="100" value="100"></progress>
                    <p>I thrive in the world of server-side development, databases, and system architecture. When I'm not optimizing database queries or designing APIs, I'm exploring new technologies to enhance my backend toolkit.</p>
                </div>
            `,
        "cat skills.txt": `
                <div class="section visible" id="skills">
                    <h2 class="section-title">TECHNICAL SKILLS</h2>

                    <div class="skill-category">
                        <h3 class="skill-title">Backend Development</h3>
                        <div class="skill-list">
                            <span class="skill-tag">Python</span>
                            <span class="skill-tag">Java</span>
                            <span class="skill-tag">Go</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h3 class="skill-title">Databases</h3>
                        <div class="skill-list">
                            <span class="skill-tag">PostgreSQL</span>
                            <span class="skill-tag">MongoDB</span>
                            <span class="skill-tag">MySQL</span>
                            <span class="skill-tag">Redis</span>
                            <span class="skill-tag">OracleDB</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h3 class="skill-title">DevOps & Infrastructure</h3>
                        <div class="skill-list">
                            <span class="skill-tag">Docker</span>
                            <span class="skill-tag">Kubernetes</span>
                            <span class="skill-tag">CI/CD</span>
                            <span class="skill-tag">AWS</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h3 class="skill-title">API Design</h3>
                        <div class="skill-list">
                            <span class="skill-tag">RESTful APIs</span>
                            <span class="skill-tag">WebSockets</span>
                            <span class="skill-tag">Swagger/OpenAPI</span>
                        </div>
                    </div>
                </div>
            `,
        "ls -la projects/": `
                <div class="section visible" id="projects">
                    <h2 class="section-title">KEY PROJECTS</h2>

                    <div class="project">
                        <h3 class="project-title">Scalable Microservice Architecture</h3>
                        <p>Designed and implemented a fault-tolerant microservice ecosystem processing 10M+ requests daily.</p>
                        <div class="skill-list">
                            <span class="skill-tag">Node.js</span>
                            <span class="skill-tag">Kubernetes</span>
                            <span class="skill-tag">MongoDB</span>
                            <span class="skill-tag">RabbitMQ</span>
                        </div>
                    </div>

                    <div class="project">
                        <h3 class="project-title">High-Performance API Gateway</h3>
                        <p>Built a custom API gateway with rate limiting, caching, and authentication services.</p>
                        <div class="skill-list">
                            <span class="skill-tag">Go</span>
                            <span class="skill-tag">Redis</span>
                            <span class="skill-tag">JWT</span>
                        </div>
                    </div>

                    <div class="project">
                        <h3 class="project-title">Distributed Data Processing Pipeline</h3>
                        <p>Engineered a resilient ETL system processing terabytes of data with fault tolerance.</p>
                        <div class="skill-list">
                            <span class="skill-tag">Python</span>
                            <span class="skill-tag">Apache Kafka</span>
                            <span class="skill-tag">PostgreSQL</span>
                            <span class="skill-tag">AWS S3</span>
                        </div>
                    </div>
                </div>
            `,
        "more experience.log": `
                <div class="section visible" id="experience">
                    <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>

<!--                    <div class="experience">-->
<!--                        <h3 class="exp-title">Senior Backend Engineer | Company Name</h3>-->
<!--                        <p>2021 - Present</p>-->
<!--                        <ul>-->
<!--                            <li>Led the architecture and development of mission-critical backend services</li>-->
<!--                            <li>Optimized database performance, reducing query times by 70%</li>-->
<!--                            <li>Implemented CI/CD pipelines, cutting deployment time from days to minutes</li>-->
<!--                        </ul>-->
<!--                    </div>-->

                    <div class="experience">
                        <h3 class="exp-title">Backend Developer | Beeline Uzbekistan</h3>
                        <p>2023 November - Present </p>
                        <ul>
                            <li>Developed and maintained a robust REST API using DRF and Spring Boot being used
by customer sellers all around the country. </li>
                            <li>Implemented asynchronous task processing using Celery and RabbitMQ enhancing system scalability and
performance, and monitored task execution and worker status using Flower</li>
                            <li>Collaborated with cross-functional teams to gather requirements, design system architecture, and implement
features that meet the needs of customer sellers nationwide, ensuring scalability and reliability of the platform.</li>
                        </ul>
                    </div>

                    <div class="experience">
                        <h3 class="exp-title">System Admin Intern | Beeline Uzbekistan</h3>
                        <p>2023 July - 2023 November</p>
                        <ul>
                            <li>Contributed to billing system maintenance and optimization, ensuring accurate processing of customer transactions
and invoices</li>
                            <li>Utilized SQL queries to extract, manipulate, and analyze data from databases, providing insights and supporting
decision-making processes</li>
                            <li>Collaborated with team members to troubleshoot billing-related issues and implement solutions to improve system
efficiency</li>
                        </ul>
                    </div>
                </div>
            `,
        "echo $contact_info": `
                <div class="section visible" id="contact">
                    <h2 class="section-title">CONTACT INFORMATION</h2>

                    <div class="contact-info">
                        <div class="contact-item">Email: <a href="mailto:your.email@example.com">sabdukodirovv@gmail.com</a></div>
                        <div class="contact-item">GitHub: <a href="https://github.com/yourusername" target="_blank">Github</a></div>
                        <div class="contact-item">LinkedIn: <a href="https://linkedin.com/in/sabdukodirov" target="_blank">Linkedin</a></div>
<!--                        <div class="contact-item">Twitter: <a href="https://twitter.com/yourhandle" target="_blank">@yourhandle</a></div>-->
                    </div>
                </div>
            `,
        "help": `
                <div class="section visible" id="help">
                    <h2 class="section-title">AVAILABLE COMMANDS</h2>

                    <div class="help-command"><span class="command">whoami</span> <span class="help-desc">- Display personal information</span></div>
                    <div class="help-command"><span class="command">cat skills.txt</span> <span class="help-desc">- List technical skills</span></div>
                    <div class="help-command"><span class="command">ls -la projects/</span> <span class="help-desc">- Show featured projects</span></div>
                    <div class="help-command"><span class="command">more experience.log</span> <span class="help-desc">- View work experience</span></div>
                    <div class="help-command"><span class="command">echo $CONTACT_INFO</span> <span class="help-desc">- Display contact information</span></div>
                    <div class="help-command"><span class="command">clear</span> <span class="help-desc">- Clear the terminal</span></div>
                    <div class="help-command"><span class="command">help</span> <span class="help-desc">- Show this help menu</span></div>
                </div>
            `
    };

    // Command history
    let commandHistory = [];
    let historyIndex = -1;

    // Terminal elements
    const terminal = document.getElementById('terminal');
    const terminalContent = document.getElementById('terminal-content');
    const inputPrompt = document.getElementById('input-prompt');
    const currentLine = document.getElementById('current-line');
    const commandInput = document.getElementById('command-input');

    // Focus the hidden input on page load
    window.addEventListener('load', () => {
        commandInput.focus();
    });

    // Keep focus on the hidden input
    document.addEventListener('click', () => {
        commandInput.focus();
    });

    // Execute a command when entered
    function executeCommand(command) {
        // Create a new prompt with the entered command
        const newPrompt = document.createElement('div');
        newPrompt.className = 'prompt command-history';
        newPrompt.innerHTML = `<span class="command">${command}</span>`;

        // Insert the new prompt before the input prompt
        terminal.insertBefore(newPrompt, inputPrompt);

        // Add command to history
        if (command.trim() !== '') {
            commandHistory.push(command);
            historyIndex = commandHistory.length;
        }

        // Process the command
        processCommand(command);

        // Clear the input
        commandInput.value = '';
        currentLine.textContent = '';

        // Scroll to the bottom
        terminal.scrollTop = terminal.scrollHeight;
    }
    // Process the command
    function processCommand(command) {
        command = command.trim().toLowerCase();

        if (command === '') {
            return;
        } else if (command === 'clear') {
            // Clear terminal including all content and command history
            terminalContent.innerHTML = '';

            // Remove all previous command prompts
            const commandPrompts = document.querySelectorAll('.prompt.command-history');
            commandPrompts.forEach(prompt => {
                prompt.remove();
            });

            return;
        } else if (sections[command]) {
            // Show section content
            const content = document.createElement('div');
            content.innerHTML = sections[command];
            terminalContent.appendChild(content);
        } else {
            // Command not found
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = `Command not found: ${command}. Type 'help' to see available commands.`;
            terminalContent.appendChild(errorDiv);
        }
    }

    // Handle input events
    commandInput.addEventListener('input', () => {
        currentLine.textContent = commandInput.value;
    });

    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            executeCommand(commandInput.value);
        } else if (e.key === 'ArrowUp') {
            // Navigate history up
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                commandInput.value = commandHistory[historyIndex];
                currentLine.textContent = commandInput.value;
            }
        } else if (e.key === 'ArrowDown') {
            // Navigate history down
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                commandInput.value = commandHistory[historyIndex];
                currentLine.textContent = commandInput.value;
            } else if (historyIndex === commandHistory.length - 1) {
                historyIndex = commandHistory.length;
                commandInput.value = '';
                currentLine.textContent = '';
            }
        }
    });

    // Show help section on page load
    window.addEventListener('load', () => {
        executeCommand('whoami');

        // Make command prompt cursor blink
        setInterval(() => {
            const cursor = document.querySelector('.blink');
            cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 500);
    });
