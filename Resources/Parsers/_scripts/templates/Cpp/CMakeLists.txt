﻿# Template generated code from trgen <version>

cmake_minimum_required (VERSION 3.14)
list(APPEND CMAKE_MODULE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/cmake)

set(CMAKE_CXX_STANDARD 17)
set(ANTLR_EXECUTABLE "<antlr_tool_path>")
set(Java_JAVA_EXECUTABLE "java")
set(ANTLR4_TAG e4c1a74)
#SET(GCC_COVERAGE_COMPILE_FLAGS "-g -pg")
#SET(GCC_COVERAGE_LINK_FLAGS    "-g -pg")
#SET(CMAKE_CXX_FLAGS  "${CMAKE_CXX_FLAGS} ${GCC_COVERAGE_COMPILE_FLAGS}")
#SET(CMAKE_EXE_LINKER_FLAGS  "${CMAKE_EXE_LINKER_FLAGS} ${GCC_COVERAGE_LINK_FLAGS}")

add_definitions(-DANTLR4CPP_STATIC)

include(ExternalAntlr4Cpp)
include_directories(${ANTLR4_INCLUDE_DIRS} ${CMAKE_CURRENT_SOURCE_DIR}/)
find_package(ANTLR REQUIRED)

<if(is_combined_grammar)>
antlr_target(
    <grammar_name>
    <grammar_file>
    )

include_directories(${ANTLR4_INCLUDE_DIRS})
include_directories(${ANTLR_<grammar_name>_OUTPUT_DIR})

add_executable(Test
    Program.cpp
    ErrorListener.cpp
    ErrorListener.h
    CaseChangingCharStream.cpp
    CaseChangingCharStream.h
    <additional_sources:{x | <x>
    } >${ANTLR_<grammar_name>_CXX_OUTPUTS}
    )

<else>
antlr_target(
    <lexer_name>
    <lexer_grammar_file>
    LEXER
    )
antlr_target(
    <parser_name>
    <parser_grammar_file>
    PARSER
    DEPENDS_ANTLR <lexer_name>
    COMPILE_FLAGS -lib ${ANTLR_<lexer_name>_OUTPUT_DIR}
    )

include_directories(${ANTLR_<lexer_name>_OUTPUT_DIR})
include_directories(${ANTLR_<parser_name>_OUTPUT_DIR})

add_executable(Test
    Program.cpp
    ErrorListener.cpp
    ErrorListener.h
    CaseChangingCharStream.cpp
    CaseChangingCharStream.h
    <additional_sources:{x | <x>
    } >${ANTLR_<lexer_name>_CXX_OUTPUTS}
    ${ANTLR_<parser_name>_CXX_OUTPUTS}
    )

<endif>

target_link_libraries(Test antlr4_static)
