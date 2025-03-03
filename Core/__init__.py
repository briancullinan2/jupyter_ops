import json
import os
import sys
import types

notebook_path = os.path.abspath(os.path.join(os.path.dirname(__file__), 'pyimport.ipynb'))
import sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

# Read and parse the notebook
with open(notebook_path, 'r', encoding='utf-8') as f:
    notebook = json.load(f)

# Extract code cells
cells = [
    "".join(cell["source"])
    for cell in notebook.get("cells", [])
    if cell.get("cell_type") == "code"
]

# Dictionary to store compiled modules
compiled_modules = {}

for i, code in enumerate(cells):
    cell_name = f"{notebook_path}[{i}]"
    new_module = types.ModuleType(cell_name)
    new_module.__file__ = cell_name

    # Execute the code in the module's namespace
    exec(code, new_module.__dict__)

    # Store the module in sys.modules for potential reuse
    sys.modules[cell_name] = new_module

    # Merge the module's exports into the compiled_modules dictionary
    # print(vars(new_module)['__all__'])
    compiled_modules.update(vars(new_module)['__all__'])

for name in compiled_modules:
    globals()[name] = compiled_modules[name]

__all__ = compiled_modules
