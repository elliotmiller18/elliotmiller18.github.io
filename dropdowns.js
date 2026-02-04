document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("dropdowns-root");
    if (!root) {
        return;
    }

    root.innerHTML = `
<div class="skills-dropdown" aria-label="Skills">
    <button class="skills-button" type="button" aria-haspopup="true">skills ▾</button>
    <div class="skills-panel" role="menu" aria-label="Skills list">
        <div class="skills-section">
            <div class="skills-section-title">Languages</div>
            <ul class="skills-list">
                <li><span class="skill-item" data-source="Classes: Compilers · Projects: Snake Compiler · Work: Apple, N1">Rust</span></li>
                <li><span class="skill-item" data-source="Classes: Operating Systems, Data Structures and Algorithms · Projects: Game Boy Emulator, Multithreading Library">C++</span></li>
                <li><span class="skill-item" data-source="Classes: Computer Organization · Projects: ChAsm">C</span></li>
                <li><span class="skill-item" data-source="Classes: Compilers · Projects: Snake Compiler">x86</span></li>
                <li><span class="skill-item" data-source="Classes: Computer Organization · Projects: ChAsm">ARM</span></li>
                <li><span class="skill-item" data-source="Classes: Formal Verification of Distributed Systems · Projects: Formally Verified Sharded KV store">Dafny</span></li>
                <li><span class="skill-item" data-source="Classes: Web Systems · Projects: Wordle Bot">Python</span></li>
                <li><span class="skill-item" data-source="Classes: Game Development · Projects: Platformer, Tower Defense Game">C#</span></li>
            </ul>
        </div>
        <div class="skills-section">
            <div class="skills-section-title">Libraries/Frameworks</div>
            <ul class="skills-list">
                <li><span class="skill-item" data-source="Projects: Game Boy Emulator, ChAsm">SDL</span></li>
                <li><span class="skill-item" data-source="Classes: Web Systems · Work: Wise Pelican">AWS CDK/SDK</span></li>
                <li><span class="skill-item" data-source="Classes: Game Development · Projects: Platformer, Tower Defense Game">Unity</span></li>
            </ul>
        </div>
        <div class="skills-section">
            <div class="skills-section-title">Developer Tools</div>
            <ul class="skills-list">
                <li><span class="skill-item" data-source="Used across projects, coursework, and professional work">Git</span></li>
                <li><span class="skill-item" data-source="Work: Wise Pelican">AWS</span></li>
                <li><span class="skill-item" data-source="Work: Wise Pelican">AWS Lambdas</span></li>
                <li><span class="skill-item" data-source="Work: Wise Pelican">Docker</span></li>
                <li><span class="skill-item" data-source="Primary operating system">macOS</span></li>
            </ul>
        </div>
    </div>
</div>
<div class="accomplishment-dropdown" aria-label="Greatest accomplishment">
    <button class="skills-button" type="button" aria-haspopup="true">my greatest accomplishment ▾</button>
    <div class="accomplishment-panel" role="menu" aria-label="Stack Overflow ranking">
        <a href="https://stackoverflow.com/questions/79686427/why-do-bit-operators-have-such-low-precedence-in-c-and-c" target="_blank">
            <img src="stackoverflow.png" alt="Stack Overflow ranking" class="accomplishment-image">
        </a>
    </div>
</div>
`;
});
