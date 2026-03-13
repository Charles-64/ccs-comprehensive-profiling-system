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
        Schema::create('syllabus', function (Blueprint $table) {
            $table->id('syllabus_id');
            $table->foreignId('course_id')->constrained('course', 'course_id')->onDelete('cascade');
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->text('objectives')->nullable();
            $table->text('prerequisites')->nullable();
            $table->integer('total_hours')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('course_id', 'idx_syllabus_course');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('syllabus');
    }
};