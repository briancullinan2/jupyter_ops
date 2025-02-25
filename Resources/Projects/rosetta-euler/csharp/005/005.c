#include <mono/jit/jit.h>
#include <mono/metadata/assembly.h>
#include <mono/metadata/debug-helpers.h>

MonoDomain *domain;
MonoAssembly *assembly;

void init_mono()
{
  domain = mono_jit_init("MyMonoDomain");
  assembly = mono_domain_assembly_open(domain, "005.dll");
  //assembly = mono_domain_assembly_open(domain, "Debug/net9.0/osx-arm64/005.dll");
}

int main(int argc, char *argv[])
{
  init_mono();

  MonoImage *image = mono_assembly_get_image(assembly);

  mono_jit_exec(domain, assembly, argc, argv);

  MonoClass *klass = mono_class_from_name(image, "", "Euler");
  //MonoObject *instance = mono_object_new(domain, klass);

  MonoMethod *method = mono_class_get_method_from_name(klass, "Main", 1);
  // MonoString *string = mono_string_new(domain, "hello");
  void *params[] = {/*string*/};
  MonoObject *result = mono_runtime_invoke(method, NULL /*instance*/, params, NULL);
  return *(int *)mono_object_unbox(result);
}
