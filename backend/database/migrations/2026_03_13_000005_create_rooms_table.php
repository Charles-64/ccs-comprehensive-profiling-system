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
        Schema::create('rooms', function (Blueprint $table) {
            $table->id('room_id');
            $table->string('room_number', 20)->unique();
            $table->string('building', 100)->nullable();
            $table->integer('capacity')->nullable();
            $table->enum('room_type', ['Classroom', 'Lecture Hall', 'Auditorium', 'Lab'])->default('Classroom');
            $table->text('facilities')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('room_type', 'idx_rooms_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};