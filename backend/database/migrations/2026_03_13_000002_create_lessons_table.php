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
        Schema::create('lessons', function (Blueprint $table) {
            $table->id('lesson_id');
            $table->foreignId('syllabus_id')->constrained('syllabus', 'syllabus_id')->onDelete('cascade');
            $table->integer('lesson_number');
            $table->string('title', 255);
            $table->text('content')->nullable();
            $table->text('objectives')->nullable();
            $table->integer('duration_hours')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('syllabus_id', 'idx_lessons_syllabus');
            $table->unique(['syllabus_id', 'lesson_number'], 'unique_syllabus_lesson');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};