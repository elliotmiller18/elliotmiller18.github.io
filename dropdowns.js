document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("dropdowns-root");
    if (!root) {
        return;
    }

    root.innerHTML = `
<div class="skills-dropdown" aria-label="Skills">
    <button class="skills-button" type="button" aria-haspopup="true" aria-expanded="false">skills ▾</button>
    <div class="skills-panel" role="menu" aria-label="Skills list">
        <div class="skills-section">
            <div class="skills-section-title">Languages</div>
            <ul class="skills-list">
                <li><span class="skill-item" data-source="Classes: Compilers · Projects: Snake Compiler, P2P Fileshare · Work: Apple, N1">Rust</span></li>
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
                <li><span class="skill-item" data-source="Work: N1 · Projects: P2P Fileshare">Tokio</span></li>
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
    <button class="skills-button" type="button" aria-haspopup="true" aria-expanded="false">#3 on stackoverflow ▾</button>
    <div class="accomplishment-panel" role="menu" aria-label="Stack Overflow ranking">
        <a href="https://stackoverflow.com/questions/79686427/why-do-bit-operators-have-such-low-precedence-in-c-and-c" target="_blank">
            <img src="stackoverflow.png" alt="Stack Overflow ranking" class="accomplishment-image">
        </a>
    </div>
</div>
`;

    const dropdowns = Array.from(root.querySelectorAll(".skills-dropdown, .accomplishment-dropdown"));
    const buttons = Array.from(root.querySelectorAll(".skills-button"));
    const skillItems = Array.from(root.querySelectorAll(".skill-item"));
    const tooltip = document.createElement("div");
    tooltip.className = "skills-tooltip";
    document.body.appendChild(tooltip);

    let activeTooltipItem = null;

    const clearActiveSkills = () => {
        skillItems.forEach((item) => item.classList.remove("is-active"));
    };

    const hideTooltip = () => {
        tooltip.classList.remove("is-visible");
        tooltip.textContent = "";
        activeTooltipItem = null;
    };

    const positionTooltip = (item) => {
        const rect = item.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom + 8}px`;
    };

    const showTooltip = (item) => {
        tooltip.textContent = item.dataset.source || "";
        positionTooltip(item);
        tooltip.classList.add("is-visible");
        activeTooltipItem = item;
    };

    const closeAll = () => {
        dropdowns.forEach((dropdown) => dropdown.classList.remove("is-open"));
        buttons.forEach((button) => button.setAttribute("aria-expanded", "false"));
        clearActiveSkills();
        hideTooltip();
    };

    skillItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            if (!item.classList.contains("is-active")) {
                showTooltip(item);
            }
        });

        item.addEventListener("mouseleave", () => {
            if (!item.classList.contains("is-active")) {
                hideTooltip();
            }
        });
    });

    root.addEventListener("click", (event) => {
        const button = event.target.closest(".skills-button");
        if (button) {
            event.stopPropagation();
            const dropdown = button.closest(".skills-dropdown, .accomplishment-dropdown");
            const isOpen = dropdown.classList.contains("is-open");

            closeAll();
            if (!isOpen) {
                dropdown.classList.add("is-open");
                button.setAttribute("aria-expanded", "true");
            }
            return;
        }

        const skillItem = event.target.closest(".skill-item");
        if (skillItem) {
            event.stopPropagation();
            const shouldActivate = !skillItem.classList.contains("is-active");

            clearActiveSkills();
            if (shouldActivate) {
                skillItem.classList.add("is-active");
                showTooltip(skillItem);
            } else {
                hideTooltip();
            }
            return;
        }

        if (event.target.closest(".skills-panel, .accomplishment-panel")) {
            event.stopPropagation();
        }
    });

    document.addEventListener("click", () => {
        closeAll();
    });

    window.addEventListener("scroll", () => {
        if (activeTooltipItem) {
            positionTooltip(activeTooltipItem);
        }
    }, true);
});
