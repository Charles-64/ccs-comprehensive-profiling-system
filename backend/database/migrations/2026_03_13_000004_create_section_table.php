<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('section', function (Blueprint $table) {
            $table->id('section_id');
            $table->foreignId('course_id')->constrained('course', 'course_id')->onDelete('cascade');
            $table->string('section_code', 20);
            $table->integer('capacity')->nullable();
            $table->enum('schedule_type', ['Lecture', 'Lab', 'Seminar'])->default('Lecture');
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('course_id', 'idx_section_course');
            $table->unique(['course_id', 'section_code'], 'unique_course_section');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('section');
    }
};