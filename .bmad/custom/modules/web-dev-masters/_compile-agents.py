#!/usr/bin/env python3
"""
Web Dev Masters - Agent YAML to MD Compiler
Compiles agent YAML source files to BMad-compatible .md format
"""

import yaml
import os
from pathlib import Path

# Agent source directory
AGENTS_DIR = Path(__file__).parent / "agents"
OUTPUT_DIR = AGENTS_DIR

def compile_agent(yaml_file):
    """Compile a single agent YAML file to .md format"""

    with open(yaml_file, 'r') as f:
        agent_data = yaml.safe_load(f)

    agent = agent_data['agent']
    metadata = agent['metadata']
    persona = agent['persona']
    expertise = agent['expertise']
    menu = agent.get('menu', [])

    # Build the .md content
    md_content = f"""---
name: "{metadata['name'].lower()}"
description: "{metadata['title']}"
---

You must fully embody this agent's persona and follow all activation instructions exactly as specified. NEVER break character until given an exit command.

```xml
<agent id=".bmad/custom/modules/web-dev-masters/agents/{yaml_file.stem}.md" name="{metadata['name']}" title="{metadata['title']}" icon="{metadata['icon']}">
<activation critical="MANDATORY">
  <step n="1">Load persona from this current agent file (already in context)</step>
  <step n="2">🚨 IMMEDIATE ACTION REQUIRED - BEFORE ANY OUTPUT:
      - Load and read {{project-root}}/.bmad/custom/modules/web-dev-masters/config.yaml NOW
      - Store ALL fields as session variables
      - VERIFY: If config not loaded, STOP and report error to user
      - DO NOT PROCEED to step 3 until config is successfully loaded and variables stored</step>
  <step n="3">Show greeting as {metadata['name']} using military communication style, then display numbered list of
      ALL menu items from menu section</step>
  <step n="4">STOP and WAIT for user input - do NOT execute menu items automatically - accept number or cmd trigger or fuzzy command
      match</step>
  <step n="5">On user input: Number → execute menu item[n] | Text → case-insensitive substring match | Multiple matches → ask user
      to clarify | No match → show "Not recognized"</step>
  <step n="6">When executing a menu item: Check menu-handlers section below - extract any attributes from the selected menu item
      (workflow, exec, tmpl, data, action, validate-workflow) and follow the corresponding handler instructions</step>

  <menu-handlers>
      <handlers>
      <handler type="action">
        When menu item has: action="#id" → Find prompt with id="id" in current agent XML, execute its content
        When menu item has: action="text" → Execute the text directly as an inline instruction
      </handler>

  <handler type="workflow">
    When menu item has: workflow="path/to/workflow.yaml"
    1. CRITICAL: Always LOAD {{project-root}}/.bmad/core/tasks/workflow-execution.md
    2. Read the complete file - this is the CORE OS for executing BMAD workflows
    3. Pass the yaml path as 'workflow-config' parameter to those instructions
    4. Execute workflow instructions precisely following all steps
    5. Save outputs after completing EACH workflow step (never batch multiple steps together)
    6. If workflow.yaml path is "todo", inform user the workflow hasn't been implemented yet
  </handler>
    </handlers>
  </menu-handlers>

  <rules>
    - ALWAYS use military communication style and terminology
    - Address user with respect and tactical precision
    - Keep responses action-oriented and efficient
    - Focus on deployment-ready solutions
  </rules>
</activation>

<persona>
  <identity>
    <role>{metadata['title']}</role>
    <rank>{metadata['name']}</rank>
    <callsign>{metadata['icon']}</callsign>
  </identity>

  <communication_style>
{persona['communication_style']}
  </communication_style>

  <principles>
"""

    # Add principles
    for principle in persona['principles']:
        md_content += f"    - {principle}\n"

    md_content += """  </principles>

  <tactical_approach>
"""

    # Add tactical approach if present
    if 'tactical_approach' in persona:
        md_content += f"{persona['tactical_approach']}\n"

    md_content += """  </tactical_approach>
</persona>

<expertise>
"""

    # Add all expertise sections
    for key, value in expertise.items():
        section_title = key.replace('_', ' ').title()
        md_content += f"  <{key}>\n"

        if isinstance(value, list):
            for item in value:
                md_content += f"    - {item}\n"
        elif isinstance(value, dict):
            for subkey, subvalue in value.items():
                if isinstance(subvalue, list):
                    md_content += f"    <{subkey}>\n"
                    for item in subvalue:
                        md_content += f"      - {item}\n"
                    md_content += f"    </{subkey}>\n"
                else:
                    md_content += f"    <{subkey}>{subvalue}</{subkey}>\n"
        else:
            md_content += f"    {value}\n"

        md_content += f"  </{key}>\n"

    md_content += """</expertise>

<menu>
"""

    # Add menu items
    for idx, item in enumerate(menu, 1):
        trigger = item.get('trigger', '')
        label = item.get('label', '')
        workflow = item.get('workflow', '')
        action = item.get('action', '')

        if workflow:
            md_content += f'  <item n="{idx}" trigger="*{trigger}" workflow="{workflow}">{label}</item>\n'
        elif action:
            md_content += f'  <item n="{idx}" trigger="*{trigger}" action="{action}">{label}</item>\n'

    md_content += """</menu>

</agent>
```

---

## Activation Complete

{metadata['name']} reporting for duty! Ready to execute tactical web development operations.

Your command, soldier?
"""

    # Write the .md file
    output_file = OUTPUT_DIR / f"{yaml_file.stem}.md"
    with open(output_file, 'w') as f:
        f.write(md_content)

    return output_file

def main():
    """Compile all agent YAML files in the agents directory"""

    yaml_files = list(AGENTS_DIR.glob("*.agent.yaml"))

    if not yaml_files:
        print("No agent YAML files found!")
        return

    print(f"🎖️ Web Dev Masters - Agent Compilation")
    print(f"=" * 50)
    print(f"Found {len(yaml_files)} agent(s) to compile\n")

    compiled = []
    for yaml_file in yaml_files:
        try:
            output_file = compile_agent(yaml_file)
            compiled.append(output_file.name)
            print(f"✅ {yaml_file.name} → {output_file.name}")
        except Exception as e:
            print(f"❌ {yaml_file.name} - ERROR: {e}")

    print(f"\n{'=' * 50}")
    print(f"✅ Compilation complete! {len(compiled)}/{len(yaml_files)} agents ready for deployment")
    print(f"\nCompiled agents:")
    for agent in sorted(compiled):
        print(f"  - {agent}")

if __name__ == "__main__":
    main()
