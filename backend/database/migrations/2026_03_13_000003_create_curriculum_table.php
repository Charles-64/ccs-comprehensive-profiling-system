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
        Schema::create('curriculum', function (Blueprint $table) {
            $table->id('curriculum_id');
            $table->string('curriculum_code', 20)->unique();
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->string('department', 100)->nullable();
            $table->integer('total_credits')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('department', 'idx_curriculum_department');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('curriculum');
    }
};